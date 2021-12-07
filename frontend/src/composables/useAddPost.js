import { ref } from "vue";
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
    const isLoading = ref(false)

    const addPost = async (payload) => {
        isLoading.value = true
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        payload.timestamp = dateTime
        


        console.log(payload);
    };
    const addSchedule = (schedules) => {
        posts.value.schedule = schedules;
    };

    return { addPost, addSchedule };
}
