import { createRouter, createWebHistory } from "vue-router";
import App from "../views/App.vue";
import LoginView from "@/views/LoginView.vue";
import AssistantView from "@/views/AssistantView.vue";
import DirectorView from "@/views/DirectorView.vue";
import MedecinView from "@/views/MedecinView.vue"; // Corrected the import
import Api from "../views/Api.vue";
import Login from "../views/Login.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "App",
  //   component: App,
  //   /* redirect: "/login", // Redirects root path to /login */
  // },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/assistant",
    name: "Assistant",
    component: AssistantView,
  },
  {
    path: "/director",
    name: "Director",
    component: DirectorView,
  },
  {
    path: "/medecin",
    name: "Medecin",
    component: MedecinView,
  },
  {
    path: "/api",
    name: "Api",
    component: Api,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
