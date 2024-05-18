import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import Login from "../components/Accounts/Login.vue"
import Patients from "../components/Lists/Patients.vue"
import Api from "../components/Api.vue"

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/patients',
        name:'Patients',
        component:Patients
    },
    {
        path:'/api',
        name:'api',
        component:Api
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
