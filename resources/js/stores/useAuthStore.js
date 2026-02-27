import { defineStore } from 'pinia'
import { fetchMe } from '@/services/accountService'
import { getCsrfCookie, doLogout, doLogin } from '@/services/authService'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        loaded: false,
    }),
    actions: {
        async fetchUser() {
            try {
                const res = await fetchMe()
                this.user = res?.data
                this.loaded = true
            } catch {
                this.user = null
                this.loaded = true
            }
        },
        async login(email, password) {
            await getCsrfCookie()
            const res = await doLogin(email, password)

            this.user = res.data.user
        },
        async logout() {
            await doLogout()
            this.user = null
        },
    },
})
