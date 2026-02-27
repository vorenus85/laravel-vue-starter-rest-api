import { useRouter } from 'vue-router'

export const useRedirects = () => {
    const router = useRouter()

    const toDashboard = () => {
        router.push({ name: 'dashboard' })
    }

    const toCreateUser = () => {
        router.push({ name: 'users.create' })
    }

    const toUsersList = () => {
        router.push({ name: 'users' })
    }

    const toLogin = () => {
        router.push({ name: 'login' })
    }

    return {
        toDashboard,
        toCreateUser,
        toUsersList,
        toLogin,
    }
}
