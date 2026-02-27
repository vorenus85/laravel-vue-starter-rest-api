import { createRouter, createWebHistory } from 'vue-router'

import DashboardPage from '@/pages/DashboardPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import RegisterPage from '@/pages/Auth/RegisterPage.vue'
import LoginPage from '@/pages/Auth/LoginPage.vue'

import AcountProfilePage from '@/pages/Account/ProfilePage.vue'
import AccountPasswordPage from '@/pages/Account/PasswordPage.vue'

import UserListPage from '@/pages/User/ListPage.vue'
import UserCreatePage from '@/pages/User/CreatePage.vue'
import UserEditPage from '@/pages/User/EditPage.vue'

import { useAuthStore } from '@/stores/useAuthStore'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundPage },
        { path: '/', name: 'login', component: LoginPage },
        {
            path: '/login',
            redirect: () => {
                return { path: '/' }
            },
        },
        { path: '/register', name: 'register', component: RegisterPage },
        {
            path: '/account',
            name: 'account',
            redirect: () => {
                return { path: '/account/profile' }
            },
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/account/profile',
            name: 'profile',
            component: AcountProfilePage,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/account/password',
            name: 'password',
            component: AccountPasswordPage,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/users',
            name: 'users',
            component: UserListPage,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/users/create',
            name: 'users.create',
            component: UserCreatePage,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/users/:id',
            name: 'users.show',
            component: UserEditPage,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardPage,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/logout',
            name: 'logout',
            meta: { requiresAuth: true },
        },
    ],
})

router.beforeEach(async to => {
    const auth = useAuthStore()

    if (to.meta.requiresAuth) {
        if (!auth.loaded) {
            await auth.fetchUser()
        }

        if (!auth.user?.id) {
            return { name: 'login' }
        }
    }

    if (to.name === 'login' && auth.user?.id) {
        return { name: 'dashboard' }
    }

    if (to.name === 'logout') {
        await auth.logout()
        return { name: 'login' }
    }
})

export default router
