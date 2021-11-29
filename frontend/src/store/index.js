import { createStore } from "vuex";
import useFetch from "../composables/useAuth";
const { user } = useFetch();
import swal from "sweetalert2";
export const store = createStore({
    state: {
        isMobile: false,
        isPopup: false,
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
