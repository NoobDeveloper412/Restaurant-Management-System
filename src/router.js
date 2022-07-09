import Home from "./components/Home.vue";
import Signup from "./components/Signup.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { name: "Home-Page", component: Home, path: "/" },
  { name: "Signup", component: Signup, path: "/signup" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
