import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/home/Home.vue'

import WorkBench from '../components/home/main/index/WorkBench.vue'
import Schedule from '../components/home/main/index/Schedule.vue'


import Contacts from '../components/home/main/organization/organizational-structure/Contacts.vue'
import OrganizationManagement from '../components/home/main/organization/organizational-structure/OrganizationManagement.vue'
import OrganizationChart from '../components/home/main/organization/organizational-structure/OrganizationChart.vue'
import WorkPlace from '../components/home/main/organization/organizational-structure/WorkPlace.vue'

import PositionManagement from '../components/home/main/organization/position-system/PositionManagement.vue'
import JobManagement from '../components/home/main/organization/position-system/JobManagement.vue'
import RankManagement from '../components/home/main/organization/position-system/RankManagement.vue'
import PositionCategory from '../components/home/main/organization/position-system/PositionCategory.vue'


import RoleManagement from '../components/home/main/organization/RoleManagement.vue'


import OrganizationType from '../components/home/main/organization/set-up/OrganizationType.vue'
import AddressBookFieldDisplay from '../components/home/main/organization/set-up/AddressBookFieldDisplay.vue'

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
                path: 'index/work-bench',
                component: WorkBench
            },
            {
                path: 'index/schedule',
                component: Schedule
            },
            {
                path: 'organization/organizational-structure/contacts',
                component: Contacts
            },
            {
                path: 'organization/organizational-structure/organization-management',
                component: OrganizationManagement
            },
            {
                path: 'organization/organizational-structure/organization-chart',
                component: OrganizationChart
            },
            {
                path: 'organization/organizational-structure/work-place',
                component: WorkPlace
            },
            {
                path: 'organization/position-system/position-management',
                component: PositionManagement
            },
            {
                path: 'organization/position-system/job-management',
                component: JobManagement
            },
            {
                path: 'organization/position-system/rank-management',
                component: RankManagement
            },
            {
                path: 'organization/position-system/position-category',
                component: PositionCategory
            },
            {
                path: 'organization/role-management',
                component: RoleManagement
            },
            {
                path: 'organization/set-up/organization-type',
                component: OrganizationType
            },
            {
                path: 'organization/set-up/address-book-field-display',
                component: AddressBookFieldDisplay
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router