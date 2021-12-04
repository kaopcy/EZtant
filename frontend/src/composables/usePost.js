import { ref } from "vue";
export default function () {
    const isLoading = ref(true);
    const getAllPost = async () => {
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const post = [
            {
                id: 1,
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
                requested: [
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
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
                id: 2,
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
                requested: [
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
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
                id: 3,
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
                requested: [
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
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

    const getLastestPost = async () => {
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const post = [
            {
                id: 1,
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
                requested: [
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
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
                id: 2,
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
                requested: [
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
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
                id: 3,
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
                requested: [
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
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

    const getPostByPostID = async (id) => {
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const post = {
            id: id,
            subject: "Data communication",
            timeStamp: "15 minute ago",
            author: "Jirasak",
            requested: [
                {
                    name: "63010604 Piyachai Kaewchum",
                    imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                },
                {
                    name: "63010604 Piyachai Kaewchum",
                    imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                },
                {
                    name: "63010604 Piyachai Kaewchum",
                    imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
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

    const getPostByTeacherID = async (ID) => {
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const post = [
            {
                id: 1,
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: ID,
                requested: [
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
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
                id: 2,
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: ID,
                requested: [
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
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
                id: 3,
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: ID,
                requested: [
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
                    },
                    {
                        name: "63010604 Piyachai Kaewchum",
                        imageURL: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=uIHnzFtiF0wAX8-HKzp&_nc_ht=scontent.fbkk5-1.fna&oh=082c66a484cb20a07399269e02d2fcec&oe=61D2846D",
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
        return post;
    };

    return {
        getAllPost,
        getPostByPostID,
        getLastestPost,
        getPostByTeacherID,
        isLoading,
    };
}
