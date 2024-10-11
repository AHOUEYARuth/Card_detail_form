import { createRouter, createWebHistory } from "vue-router";
import Thank from "./views/Thank.vue";
import Home from "./views/Home.vue";

const routes = [
    {
        path: '/' ,
        component: Home
    },
    {
        path: '/thank' ,
        component: Thank
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})