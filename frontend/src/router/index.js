import { createRouter, createWebHistory } from "vue-router";
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
    

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
