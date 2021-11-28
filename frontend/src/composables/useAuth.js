import { ref, computed } from "vue";
import { useRouter } from 'vue-router'

const user = ref({
    id: null,
    studentID: null,
    firstName: null,
    lastName: null,
    role: null,
    department: null,
    year: null,
    email: null,
});

const firstName = ref("Piyachai");
const lastName = ref("Kaewchum");

const baseURL = "http://127.0.0.1:8000/";
// const baseURL = 'http://192.168.1.40:8000/';

export default function () {
    const role = computed(() => user.value.role);
    const isLoggedIn = computed(() => (user.value.role ? true : false));
    const getFullName = computed(() => isLoggedIn.value ? `${firstName.value} ${lastName.value}` : 'not logged in');

    const router = useRouter()

    const login = async (email, password) => {
        try {
            let response = await fetch(`${baseURL}api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const data = await response.json();
            router.push('/')
            console.log(data);
        } catch (error) {
            alert(error.message);
        }
    };

    const logout = async () => {
        try {
            const response = await fetch(`${baseURL}api/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await response.json();
            clearUserData()
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getUser = async () => {
        if (isLoggedIn.value) return
        try {
            const response = await fetch(`${baseURL}api/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await response.json();
            user.value.role = data.role ?? null;
            user.value.studentID = data.student_id ?? null;
            user.value.id = data.id ?? null;
            user.value.firstName = data.first_name ?? null;
            user.value.lastName = data.last_name ?? null;
            user.value.department = data.department ?? null;
            user.value.year = data.student_year ?? null;
            user.value.email = data.email ?? null;
        } catch (error) {
            console.log(error.message);
        }
    };

    const clearUserData = ()=>{
        user.value = {
            id: null,
            studentID: null,
            firstName: null,
            lastName: null,
            role: null,
            department: null,
            year: null,
            email: null,
        }
    }

    getUser();

    return {
        role,
        isLoggedIn,
        user,
        getFullName,
        login,
        logout,
        getUser,
    };
}
