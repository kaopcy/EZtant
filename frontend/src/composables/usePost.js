import { ref } from "vue";
export default function () {
    const isLoading = ref(false);
    const getAllPost = async () => {
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const post = [
            {
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
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
                    {
                        section: "102",
                        day: "WED",
                        time: "01.00 - 04.00 PM.",
                    },
                    {
                        section: "103",
                        day: "FRI",
                        time: "04.30 - 07.30 PM.",
                    },
                ],
                detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
            },
            {
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
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
                    {
                        section: "102",
                        day: "WED",
                        time: "01.00 - 04.00 PM.",
                    },
                    {
                        section: "103",
                        day: "FRI",
                        time: "04.30 - 07.30 PM.",
                    },
                ],
                detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
            },
            {
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
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
                    {
                        section: "102",
                        day: "WED",
                        time: "01.00 - 04.00 PM.",
                    },
                    {
                        section: "103",
                        day: "FRI",
                        time: "04.30 - 07.30 PM.",
                    },
                ],
                detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
            },
        ];
        isLoading.value = false;
        console.log(post);
        return post;
    };

    const getLastestPost = async ()=>{
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const post = [
            {
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
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
                    {
                        section: "102",
                        day: "WED",
                        time: "01.00 - 04.00 PM.",
                    },
                    {
                        section: "103",
                        day: "FRI",
                        time: "04.30 - 07.30 PM.",
                    },
                ],
                detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
            },
            {
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
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
                    {
                        section: "102",
                        day: "WED",
                        time: "01.00 - 04.00 PM.",
                    },
                    {
                        section: "103",
                        day: "FRI",
                        time: "04.30 - 07.30 PM.",
                    },
                ],
                detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
            },
            {
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
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
                    {
                        section: "102",
                        day: "WED",
                        time: "01.00 - 04.00 PM.",
                    },
                    {
                        section: "103",
                        day: "FRI",
                        time: "04.30 - 07.30 PM.",
                    },
                ],
                detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
            },
        ];
        isLoading.value = false;
        console.log(post);
        return post;
    }

    const getOnePost = async () => {
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const post = {
            subject: "Data communication",
            timeStamp: "15 minute ago",
            author: "Jirasak",
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
                {
                    section: "102",
                    day: "WED",
                    time: "01.00 - 04.00 PM.",
                },
                {
                    section: "103",
                    day: "FRI",
                    time: "04.30 - 07.30 PM.",
                },
            ],
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
        };
        isLoading.value = false;
        return post;
    };

    return { getAllPost , getOnePost , getLastestPost , isLoading };
}
