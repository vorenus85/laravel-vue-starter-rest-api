import { describe, it, expect, vi } from 'vitest'

const pushMock = vi.fn()

vi.mock('vue-router', () => {
    return {
        useRouter: () => ({
            push: pushMock,
        }),
    }
})

import { useRedirects } from './useRedirects'

describe('useRedirects', () => {
    it('redirects to dashboard', () => {
        const { toDashboard } = useRedirects()

        toDashboard()

        expect(pushMock).toHaveBeenCalledWith({ name: 'dashboard' })
    })
})
