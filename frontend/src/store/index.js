import { createStore } from "vuex";

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
            state.isPopup = !state.isPopup
        }
    },
    actions: {},
    modules: {},
});
