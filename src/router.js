import Home from "./components/Home.vue";
import Signup from "./components/Signup.vue";
import SignIn from "./components/Signin.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { name: "Home-Page", component: Home, path: "/" },
  { name: "SignUp", component: Signup, path: "/signup" },
  { name: "SignIn", component: SignIn, path: "/signin" },
  { name: "Add-Page", component: Add, path: "/add" },
  { name: "Update-Page", component: Update, path: "/update/:id" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
