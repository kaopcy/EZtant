import { ref } from "vue";
import Swal from "sweetalert2";
export default function () {
    const isLoading = ref(false)
    const getAllStudent = async () => {
        try {
            isLoading.value = true
            await new Promise(resolve => setTimeout(resolve , 1500));
            const allStudent = [
                {
                    id: 1,
                    firstName: 'Piyachai',
                    lastName: 'Kaewchum',
                    faculty: 'computer',
                    image: 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=QwtBEvFjOH8AX_sfueG&_nc_ht=scontent.fbkk2-3.fna&oh=5dfc00525313b64b6707d73ce4c0fdeb&oe=61CA9B6D',
                    year: 2,
                    studentID: 63010604,
                },
                {
                    id: 2,
                    firstName: 'Thiraphat',
                    lastName: 'Ketsingnoi',
                    faculty: 'computer',
                    image: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.6435-9/130548477_2076912849110740_3167214198582533804_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFHCaTL2G-4piBs5gRPL-STOOQMsmSud7I45AyyZK53snYENt3VvqB4epcc9p3GtBPFfypWAMAaNGFOd42_h53k&_nc_ohc=0LNi6TNX5EoAX-qcnr3&tn=e_1YQSu--Z26Dl0_&_nc_ht=scontent.fbkk2-5.fna&oh=a81e1ea69d9debbb11a7d8ddddfd28ac&oe=61CB0BA6',
                    year: 2,
                    studentID: 63010467,
                },
                {
                    id: 3,
                    firstName: 'Pitchapa',
                    lastName: 'WiangThong',
                    faculty: 'computer',
                    image: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.6435-9/201969004_2814573422187954_5002808462566942689_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHJJYLD9ZrucmLF9Y4ROra0_CyYbyh-nHP8LJhvKH6cc4uqUgFki5rEvC3MJNrjXvrZmucF8m6wbaZQuWH9CjU4&_nc_ohc=SDunwEE305MAX-_gLLu&_nc_ht=scontent.fbkk2-5.fna&oh=ce256801c8cc0d5b47f96da0651811a5&oe=61CA1270',
                    year: 2,
                    studentID: 63010679,
                },
                {
                    id: 4,
                    firstName: 'Phomphiriya',
                    lastName: 'jaroawedaw',
                    faculty: 'computer',
                    image: 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t39.30808-1/p320x320/217686333_2974862376173677_9211815222400109319_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFJCbsC6RuuiotFlyvfKt6q3Xg3XcZy9B7deDddxnL0Hq-2ZhlIxKR9FgEc_1PYz8FAxpR9CwdOQ3BTc7FmCWvg&_nc_ohc=WO2wmgHrHRIAX-JcFZ1&_nc_ht=scontent.fbkk2-3.fna&oh=eefad74cb04f8486262c7af880a00a1e&oe=61A98D0C',
                    year: 2,
                    studentID: 63010679,
                },
                {
                    id: 5,
                    firstName: 'Naveeharn',
                    lastName: 'Tehmarn',
                    faculty: 'computer',
                    image: 'https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.18169-1/p320x320/19059324_1910287009216002_7253765989465157092_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHyLg_JqSj1GXQ69p-R3fWvzeth9-C9KJXN62H34L0olWogCCBUcRpUPFVgvMSMdHjwnHRD47TBWa731Bm9mdIU&_nc_ohc=-LFFVvjxNXEAX8nA76a&_nc_oc=AQmNjCh2MrGICCOcjBMaZN_So8soKB41feZUM8Mw8rS3w3FMKT1RMlCcQ4PXjDtE4n-m2VGxfhqcChZVN3VbGAh5&_nc_ht=scontent.fbkk2-4.fna&oh=223ff807edee3192e110e361b1340f3d&oe=61CA9306',
                    year: 2,
                    studentID: 63010679,
                },
            ]

            return allStudent
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
            isLoading.value = true
            await new Promise(resolve => setTimeout(resolve , 1500));
            const allStudent = [
                {
                    id: 1,
                    firstName: 'Piyachai',
                    lastName: 'Kaewchum',
                    faculty: 'computer',
                    image: 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.6435-9/145036933_2024789844329614_5665229284832997399_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF-G4NBaMMqLeOMgBnXW7Y4zrMy5swv9THOszLmzC_1MUQZpLV0TqUXN4WUpLNo9-pMK8A4LzDscC6NXxX3D41R&_nc_ohc=QwtBEvFjOH8AX_sfueG&_nc_ht=scontent.fbkk2-3.fna&oh=5dfc00525313b64b6707d73ce4c0fdeb&oe=61CA9B6D',
                },
                {
                    id: 2,
                    firstName: 'Thiraphat',
                    lastName: 'Ketsingnoi',
                    faculty: 'computer',
                    image: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.6435-9/130548477_2076912849110740_3167214198582533804_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFHCaTL2G-4piBs5gRPL-STOOQMsmSud7I45AyyZK53snYENt3VvqB4epcc9p3GtBPFfypWAMAaNGFOd42_h53k&_nc_ohc=0LNi6TNX5EoAX-qcnr3&tn=e_1YQSu--Z26Dl0_&_nc_ht=scontent.fbkk2-5.fna&oh=a81e1ea69d9debbb11a7d8ddddfd28ac&oe=61CB0BA6',
                },
                {
                    id: 3,
                    firstName: 'Pitchapa',
                    lastName: 'WiangThong',
                    faculty: 'computer',
                    image: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.6435-9/201969004_2814573422187954_5002808462566942689_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHJJYLD9ZrucmLF9Y4ROra0_CyYbyh-nHP8LJhvKH6cc4uqUgFki5rEvC3MJNrjXvrZmucF8m6wbaZQuWH9CjU4&_nc_ohc=SDunwEE305MAX-_gLLu&_nc_ht=scontent.fbkk2-5.fna&oh=ce256801c8cc0d5b47f96da0651811a5&oe=61CA1270',
                },
            ]

            return allStudent
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

    return { getAllStudent , getAllTeacher , isLoading};
}
