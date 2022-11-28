import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/home/Home.vue'
import OrganizationAside from '../components/home/aside/OrganizationAside.vue'
import EmployeeAside from '../components/home/aside/EmployeeAside.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
]

// children: [
        //     {
        //         path: 'organization',
        //         component: OrganizationAside
        //     },
        //     {
        //         path: 'employee',
        //         component: EmployeeAside
        //     }
        // ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router