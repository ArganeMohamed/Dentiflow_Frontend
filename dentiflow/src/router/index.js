import { createRouter, createWebHistory } from "vue-router";
import App from "../views/App.vue";
import LoginView from "@/views/LoginView.vue";
import AssistantView from "@/views/AssistantView.vue";
import DirectorView from "@/views/DirectorView.vue";
import MedecinView from "@/views/MedecinView.vue"; // Corrected the import

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
    /* redirect: "/login", // Redirects root path to /login */
  },
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
