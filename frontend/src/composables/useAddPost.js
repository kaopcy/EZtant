import { ref } from "vue";
import useAlert from "./useAlert";
const posts = ref({
    subject_name: "",
    subject_id: "",
    timeStamp: "",
    max_requested: "",
    wage: null,
    description: "",
    schedules: [
        {
            section: "",
            day: "",
            time: "",
        },
    ],
});

export default function () {
    const { finish , loading } = useAlert()
    const isLoading = ref(false)

    const addPost = async (payload) => {
        loading('Creating data. . .')
        isLoading.value = true
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        payload.timestamp = dateTime
        console.log(JSON.parse(JSON.stringify(payload)));
        try {
            
            const res = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/post/create`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(payload)
                }
            );
            console.log(res.status);
        } catch (error) {
            console.log(error.message);
        } finally{
            finish('Created Successfully!')
            isLoading.value = false
        }
    };
    const addSchedule = (schedules) => {
        posts.value.schedule = schedules;
    };

    const updatePost = async (payload , id)=>{
        loading('Uploading data. . .')
        isLoading.value = true
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        payload.timestamp = dateTime
        console.log(JSON.parse(JSON.stringify(payload)));
        try {
            const res = await fetch(
                `${process.env.VUE_APP_DJANGO_BASE_URL}api/post/${id}/update`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(payload)
                }
            );
            console.log(res.status);
        } catch (error) {
            console.log(error.message);
        } finally{
            finish('Uploaded Successfully!')
            isLoading.value = false
        }
    }


    return { addPost, addSchedule , updatePost };
}
