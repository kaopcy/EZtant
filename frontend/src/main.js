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
    faWind,
    faPodcast,
    faGlobe,
    faChevronLeft,
    faChevronRight,
    faTasks,
} from "@fortawesome/free-solid-svg-icons";

import {
    faFacebookSquare,
    faLine,
    faInstagramSquare,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import {
    faHeart as faHeart2,
    faAddressCard,
} from '@fortawesome/free-regular-svg-icons';

library.add(
    faSignInAlt,
    faSortAlphaDown,
    faSearch,
    faUserFriends,
    faHeart,
    faHeart2,
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
    faWind,
    faPodcast,
    faGlobe,
    faFacebook,
    faChevronLeft,
    faChevronRight,
    faAddressCard,
    faTasks,
    
);

createApp(App)
    .use(store)
    .use(router)
    .component("fa", FontAwesomeIcon)
    .mount("#app");
