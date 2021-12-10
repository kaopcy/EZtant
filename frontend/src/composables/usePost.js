import { ref } from "vue";
import { useRouter } from 'vue-router'
import useAlert from "./useAlert";
export default function () {
    const isLoading = ref(false);
    const userPost = ref(null);
    const router = useRouter()
    const { finish , loading } = useAlert()

    const getAllPost = async () => {
        isLoading.value = true;
        const allPosts = ref(null)
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
            )
            allPosts.value = await response.json()
        } catch (error) {
            console.log(error);
        } finally{
            isLoading.value = false;
        }
        return allPosts.value
    };

    const getLastestPost = async () => {
        isLoading.value = true;
        const allPosts = ref(null)
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
            )
            allPosts.value = await response.json()
        } catch (error) {
            console.log(error);
        } finally{
            isLoading.value = false;
        }
        return allPosts.value
    };

    const getPostByPostID = async (id) => {
        isLoading.value = true;
        const allPosts = ref(null)
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
            )
            allPosts.value = await response.json()
        } catch (error) {
            console.log(error);
        } finally{
            isLoading.value = false;
        }
        return allPosts.value
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
            )
            userPost.value = await response.json()
        } catch (error) {
            console.log(error);
        } finally{
            isLoading.value = false;
        }
    };

    const deletePostByID = async (ID)=>{

        loading('deleting data . . .')

        isLoading.value = true;
        try {
            await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/post/${ID}/delete` ,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            )
            router.back()
        } catch (error) {
            console.log(error);
        } finally{
            finish('deleted successfully!')
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
    };
}
