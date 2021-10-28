import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register_student",
    name: "Register_student",
    component: () => import("../views/Register_student.vue"),
  },
  {
    path: "/register_teacher",
    name: "Register_teacher",
    component: () => import("../views/Register_teacher.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
