import { ref } from "vue";
import { useRouter } from "vue-router";
import useAlert from "./useAlert";
export default function () {
    const isLoading = ref(false);
    const userPost = ref(null);
    const router = useRouter();
    const { finish, loading, error } = useAlert();

    const getAllPost = async () => {
        isLoading.value = true;
        const allPosts = ref(null);
        try {
            const response = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/post/all-teachers`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            allPosts.value = await response.json();

            const arrayMove = (arr, fromIndex, toIndex) => {
                var element = arr[fromIndex];
                arr.splice(fromIndex, 1);
                arr.splice(toIndex, 0, element);
            };

            allPosts.value.forEach((e) => {
                console.log(e.subject_name);
                if (e.requested.length == e.max_requested) {
                    arrayMove(
                        allPosts.value,
                        allPosts.value.indexOf(e),
                        allPosts.value.length
                    );
                }
            });
        } catch (error) {
            console.log(error);
        } finally {
            isLoading.value = false;
        }
        return allPosts.value;
    };

    const getLastestPost = async () => {
        isLoading.value = true;
        const allPosts = ref(null);
        try {
            const response = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/post/all-teachers`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            allPosts.value = await response.json();
            const arrayMove = (arr, fromIndex, toIndex) => {
                var element = arr[fromIndex];
                arr.splice(fromIndex, 1);
                arr.splice(toIndex, 0, element);
            };

            allPosts.value.forEach((e) => {
                if (e.requested.length == e.max_requested) {
                    arrayMove(
                        allPosts.value,
                        allPosts.value.indexOf(e),
                        allPosts.value.length
                    );
                }
            });
        } catch (error) {
            console.log(error);
        } finally {
            isLoading.value = false;
        }
        return allPosts.value;
    };

    const getPostByPostID = async (id) => {
        isLoading.value = true;
        const allPosts = ref(null);
        try {
            const response = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/post/${id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            allPosts.value = await response.json();
        } catch (error) {
            console.log(error);
        } finally {
            isLoading.value = false;
        }
        return allPosts.value;
    };

    const getPostByTeacherID = async (ID) => {
        isLoading.value = true;
        try {
            const response = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/account/${ID}/post`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            userPost.value = await response.json();
        } catch (error) {
            console.log(error);
        } finally {
            isLoading.value = false;
        }
    };

    const deletePostByID = async (ID) => {
        loading("deleting data . . .");

        isLoading.value = true;
        try {
            await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/post/${ID}/delete`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            router.back();
        } catch (error) {
            console.log(error);
        } finally {
            finish("deleted successfully!");
            isLoading.value = false;
        }
    };

    const request = async (id) => {
        loading("requesting data . . .");

        isLoading.value = true;
        try {
            const res = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/post/${id}/requested`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            const data = await res.json();
            if (data.message.includes("fail")) error("Full requested !!");
            else finish(data.message);
        } catch (error) {
            console.log(error);
        } finally {
            isLoading.value = false;
        }
    };

    return {
        getAllPost,
        getPostByPostID,
        getLastestPost,
        getPostByTeacherID,
        deletePostByID,
        isLoading,
        userPost,
        request,
    };
}
