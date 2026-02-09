import { createRouter, createWebHistory } from 'vue-router'

import DashboardPage from '@/pages/DashboardPage.vue'
import SettingsPage from '@/pages/SettingsPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundPage },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardPage,
        },
        {
            path: '/settings',
            name: 'settings',
            component: SettingsPage,
        },
    ],
})

export default router
