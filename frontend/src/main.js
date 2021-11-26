import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faSignInAlt,
    faSortAlphaDown,
    faSearch,
    faUserFriends,
    faHeart,
    faTrashAlt,
    faPlusCircle,
    faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faSignInAlt,
    faSortAlphaDown,
    faSearch,
    faUserFriends,
    faHeart,
    faTrashAlt,
    faPlusCircle,
    faCalendarAlt
);

createApp(App)
    .use(store)
    .use(router)
    .component("fa", FontAwesomeIcon)
    .mount("#app");
