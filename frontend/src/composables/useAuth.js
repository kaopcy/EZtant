import { ref, computed } from "vue";

const username = ref({
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
    const role = computed(() => username.value.role);
    const isLoggedIn = computed(() => (username.value.role ? true : false));
    const getFullName = computed(() => isLoggedIn.value ? `${firstName.value} ${lastName.value}` : 'not logged in');

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
            username.value.role = data.role ?? null;
            username.value.studentID = data.student_id ?? null;
            username.value.id = data.id ?? null;
            username.value.firstName = data.first_name ?? null;
            username.value.lastName = data.last_name ?? null;
            username.value.department = data.department ?? null;
            username.value.year = data.student_year ?? null;
            username.value.email = data.email ?? null;
        } catch (error) {
            console.log(error.message);
        }
    };

    getUser();

    return {
        role,
        isLoggedIn,
        username,
        getFullName,
        login,
        logout,
        getUser,
    };
}
