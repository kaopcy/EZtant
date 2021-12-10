import { createRouter, createWebHistory } from "vue-router";

import useAuth from "../composables/useAuth";
const { isLoggedIn , getUser } = useAuth();

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
        path: "/create",
        name: "Create",
        component: () => import("../views/Create/Create.vue"),
    },
    {
        path: "/main-post/:department",
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
    {
        path: "/student-list/profile/:id",
        name: "StudentListProfile",
        component: () => import("../views/UserList/Profile/StudentListProfile.vue"),
    },
    {
        path: "/teacher-list/profile/:id",
        name: "TeacherListProfile",
        component: () => import("../views/UserList/Profile/TeacherListProfile.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach( async (to, from, next) => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    if (!isLoggedIn.value){
        await getUser()
    }
    if (to.name !== "Login" && !isLoggedIn.value ) {
        console.log('not logged in');
        next({ name: "Login" });
    } 
    // if the user is not authenticated, `next` is called twice
    next();
});
export default router;
