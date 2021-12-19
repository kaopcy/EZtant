import { ref } from "vue";
import Swal from "sweetalert2";
export default function () {
    const isLoading = ref(false);
    const allStudent = ref(null);
    const allTeacher = ref(null);

    const user = ref(null)

    const getAllStudent = async () => {
        try {
            isLoading.value = true;
            const response = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/account/all-students`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        order: "student_year",
                        sort_by: "asc"
                    }),
                }
            );
            allStudent.value = await response.json();
            if (response.status === '403') throw new Error(allStudent.value.detail);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Access denied",
                text: error.message,
            });
        } finally {
            isLoading.value = false;
        }
    };

    const getAllTeacher = async () => {
        try {
            isLoading.value = true;
            const response = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/account/all-teachers`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        order: "email",
                        sort_by: "asc"
                    }),
                }
            );
            allTeacher.value = await response.json();
            if (response.status === '403') throw new Error(allTeacher.value.detail);

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Access denied",
                text: error.message,
            });
        } finally {
            isLoading.value = false;
        }
    };

    const getUserByID = async (id) => {
        try {
            isLoading.value = true;
            const response = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/account/${id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            user.value = await response.json();
            if (response.status === '403') throw new Error(user.value.detail);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Access denied",
                text: error.message,
            });
        } finally {
            isLoading.value = false;
        }
    };

    return { getAllStudent, getAllTeacher , getUserByID , isLoading , allStudent , allTeacher , user };
}
