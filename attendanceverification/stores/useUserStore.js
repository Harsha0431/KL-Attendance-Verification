export const useUserStore = defineStore('user-store', () => {
    const username = ref('')
    const token = ref('')
    const isLoggedIn = ref(false)

    const handleLogout = () => {
        username.value = ''
        token.value = ''
        isLoggedIn.value = false
    }

    return {
        username,
        token,
        isLoggedIn,
        handleLogout
    }
})