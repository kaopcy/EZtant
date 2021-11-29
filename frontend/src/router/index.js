import { createRouter, createWebHistory } from "vue-router";

import useAuth from "../composables/useAuth";
const { isLoggedIn } = useAuth();

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/main-post",
        name: "MainPost",
        component: () => import("../views/Post/MainPost.vue"),
    },
    {
        path: "/focus-post/:id",
        name: "FocusPost",
        component: () => import("../views/Post/FocusPost.vue"),
    },
    {
        path: "/student-profile/:id",
        name: "StudentProfile",
        component: () => import("../views/Profile/StudentProfile.vue"),
    },
    {
        path: "/teacher-profile/:id",
        name: "TeacherProfile",
        component: () => import("../views/Profile/TeacherProfile.vue"),
    },
    {
        path: "/teacher-list",
        name: "TeacherList",
        component: () => import("../views/UserList/TeacherList.vue"),
    },
    {
        path: "/student-list",
        name: "StudentList",
        component: () => import("../views/UserList/StudentList.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach((to, from, next) => {
    if (to.name !== "Login" && !isLoggedIn) {
        console.log('not logged in');
        next({ name: "Login" });
    }
    // if the user is not authenticated, `next` is called twice
    next();
});
export default router;
