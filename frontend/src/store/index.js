import { createStore } from "vuex";
import useFetch from '../composables/useAuth'
const { user } = useFetch()
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
            if ( user.value.role === 'teacher' ) state.isPopup = !state.isPopup
        }
    },
    actions: {},
    modules: {},
});
