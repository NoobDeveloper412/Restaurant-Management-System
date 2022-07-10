import Home from "./components/Home.vue";
import Signup from "./components/Signup.vue";
import SignIn from "./components/Signin.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { name: "Home-Page", component: Home, path: "/" },
  { name: "SignUp", component: Signup, path: "/signup" },
  { name: "SignIn", component: SignIn, path: "/signin" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
