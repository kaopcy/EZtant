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
    faSignOutAlt,
    faAddressBook,
    faHistory,
    faUniversity,
    faGraduationCap,
    faStar,
    faEdit,
    faKey,
    faSave,
    
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import {faLine} from '@fortawesome/free-brands-svg-icons'
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
library.add(
    faSignInAlt,
    faSortAlphaDown,
    faSearch,
    faUserFriends,
    faHeart,
    faTrashAlt,
    faPlusCircle,
    faCalendarAlt,
    faSignOutAlt,
    faAddressBook,
    faHistory,
    faUniversity,
    faGraduationCap,
    faStar,
    faEdit,
    faKey,
    faSave,
    faFacebookSquare,
    faLine,
    faInstagramSquare,
);

createApp(App)
    .use(store)
    .use(router)
    .component("fa", FontAwesomeIcon)
    .mount("#app");
