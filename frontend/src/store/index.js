import { createStore } from "vuex";
import useFetch from "../composables/useAuth";
const { user } = useFetch();
import swal from "sweetalert2";
export const store = createStore({
    state: {
        isMobile: false,
        isPopup: false,
        departmentTemplate: [
            {
                name: "Computer Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "computer.svg",
            },
            {
                name: "Bio Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "bio.svg",
            },
            {
                name: "Chemistry Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "chemistry.svg",
            },
            {
                name: "Food Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "food.svg",
            },
            {
                name: "Industial Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "industial.svg",
            },
            {
                name: "Music Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "music.svg",
            },
            {
                name: "Telecom Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "telecom.svg",
            },
        ],
    },
    getters:{
        getDepartmentName: state=> state.departmentTemplate.map((arr)=> arr.name.split(' ')[0])
    },
    mutations: {
        setIsMoblie(state, payload) {
            state.isMobile = payload;
        },
        toggleIsPopup(state) {
            if (user.value.role === "teacher")
                return (state.isPopup = !state.isPopup);
            swal.fire({
                icon: "error",
                title: "Access denied",
                text: "You must be teacher! to access this feature",
            });
        },
    },
    actions: {},
    modules: {},
});
