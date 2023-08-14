import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "Home Page",
    },
  },
  {
    name: "Show Todos",
    path: "/show-todos",
    component: () => import("@/views/ShowTodos.vue"),
    meta: {
      title: "Show Todos",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
