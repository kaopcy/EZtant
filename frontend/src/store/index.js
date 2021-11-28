import { createStore } from "vuex";
import useFetch from '../composables/useAuth'
const { username } = useFetch()
export const store = createStore({
    state: {
        isMobile: false,
        isPopup: false,
    },
    mutations: {
        setIsMoblie(state, payload) {
            state.isMobile = payload;
        },
        toggleIsPopup(state){
            console.log(username.value.role);
            if ( username.value.role === 'teacher' ) state.isPopup = !state.isPopup
        }
    },
    actions: {},
    modules: {},
});
