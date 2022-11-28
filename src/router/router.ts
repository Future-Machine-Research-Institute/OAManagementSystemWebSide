import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/home/Home.vue'
import WorkBench from '../components/home/main/index/WorkBench.vue'
import Schedule from '../components/home/main/index/Schedule.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'index/workBench',
                component: WorkBench
            },
            {
                path: 'index/schedule',
                component: Schedule
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router