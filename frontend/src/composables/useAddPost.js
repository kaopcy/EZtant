import { ref } from "vue";
const posts = ref({
    subject: "",
    timeStamp: "",
    author: "",
    detail: "",
    requested: [
        {
            name: "",
        },
    ],
    schedule: [
        {
            section: "101",
            day: "TUE",
            time: "09.00 - 12.00 AM.",
        },
    ],
});

export default function () {
    const addPost = (payload) => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        posts.value.subject = payload.subject
        posts.value.author = payload.author
        posts.value.detail = payload.detail
        posts.value.timeStamp = dateTime

        console.log(posts.value);
    };
    const addSchedule = (schedules) => {
        posts.value.schedule = schedules;
    };

    return { addPost, addSchedule };
}
