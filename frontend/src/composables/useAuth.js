import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import axios from 'axios'

const user = ref({
    id: null,
    studentID: null,
    firstName: null,
    lastName: null,
    role: null,
    department: null,
    year: null,
    email: null,
    image: null,
});

export default function () {
    const isLoading = ref(false)
    const role = computed(() => user.value.role);
    const isLoggedIn = computed(() => (user.value.role ? true : false));

    const getFullName = computed(() =>
        isLoggedIn.value
            ? `${user.value.firstName} ${user.value.lastName}`
            : "not logged in"
    );

    const router = useRouter();

    const login = async (email, password) => {
        try {
            isLoading.value = true
            let response = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                }
            );
            const data = await response.json();
            if (response.status === 403) throw new Error(data.detail);
            await getUser();
            router.push("/");
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Succesfully!',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            clearUserData()
            Swal.fire({
                icon: "error",
                title: "Access denied",
                text: error.message,
            });
        } finally{
            isLoading.value = false
        }
    };

    const logout = async () => {
        try {
            isLoading.value = true
            const response = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/logout`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            if (response.status === 403) throw new Error('403 is unacceptable for me!');
            const data = await response.json();
            clearUserData();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        } finally {
            isLoading.value = false
        }
    };

    const registerTeacher = async (teacher) => {
        try {
            console.log(teacher.firstName);
            const userData = {
                first_name: teacher.firstName,
                last_name: teacher.lastName,
                email: teacher.email,
                password: teacher.password,
                department: teacher.department,
                role: "teacher",
                imageURL: teacher.imageURL
            };
            const res = await axios.post(
                `${process.env.VUE_APP_DJANGO_BASE_URL}/api/register`,
                userData
            );
            console.log(res.status);
            await router.replace({ name: "Home" });
        } catch (error) {
            console.log(error);
        }
    };

    const registerStudent = async (student) => {
        try {
            console.log(student.firstName);
            const userData = {
                student_id: student.username,
                first_name: student.firstName,
                last_name: student.lastName,
                email: student.email,
                password: student.password,
                department: student.department,
                student_year: student.year,
                imageURL: student.imageURL,
                role: "student",
            };
            const res = await axios.post(
                `${process.env.VUE_APP_DJANGO_BASE_URL}/api/register`,
                userData
            );
            await router.replace({ name: "Home" });
            console.log(res.status);
        } catch (error) {
            console.log(error);
        }
    };

    const getUser = async () => {
        if (isLoggedIn.value) return;
        try {
            isLoading.value = true
            const response = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/account`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            if (response.status === 403) throw new Error('403 is unacceptable for me!');
            const data = await response.json();
            console.log(data);
            user.value.role = data.role ?? null;
            user.value.studentID = data.student_id ?? null;
            user.value.id = data.id ?? null;
            user.value.firstName = data.first_name ?? null;
            user.value.lastName = data.last_name ?? null;
            user.value.department = data.department ?? null;
            user.value.year = data.student_year ?? null;
            user.value.email = data.email ?? null;
            user.value.imageURL = data.imageURL ?? 'https://scontent.fbkk29-2.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=QwtBEvFjOH8AX9e6Le6&_nc_ht=scontent.fbkk29-2.fna&oh=af0b4ead911191902a9a640eddc3a077&oe=61CA9B6D';
        } catch (error) {
            clearUserData()
            console.log(error.message);
        } finally {
            isLoading.value = false
        }
    };

    const clearUserData = () => {
        user.value = {
            id: null,
            studentID: null,
            firstName: null,
            lastName: null,
            role: null,
            department: null,
            year: null,
            email: null,
            image: null,
        };
    };

    const updateUser = async ()=> {
        Swal.fire({
            title: 'Please Wait !',
            html: 'data uploading',// add html attribute if you want or remove
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            },
        });
        await new Promise(resolve=> setTimeout(resolve , 1000))
        Swal.close();
    }

    // getUser();

    return {
        role,
        isLoggedIn,
        user,
        getFullName,
        registerTeacher,
        registerStudent,
        login,
        logout,
        getUser,
        updateUser,
        isLoading
    };
}
