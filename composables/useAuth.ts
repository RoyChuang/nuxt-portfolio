export const useAuth = () => {
  const user = useState('user', () => null)
  const token = useState('token', () => null)
  const isLoggedIn = useState('isLoggedIn', () => false)
  const api = useApi()
  const router = useRouter()

  const login = async (email: string, password: string) => {
    const { data, error } = await api.login(email, password)
    
    if (error.value) {
      throw error.value
    }

    if (data.value) {
      user.value = data.value.record
      token.value = data.value.token
      isLoggedIn.value = true
      await router.push('/')
    }

    return data.value
  }

  const logout = () => {
    user.value = null
    token.value = null
    isLoggedIn.value = false
    router.push('/login')
  }

  return {
    user,
    token,
    isLoggedIn,
    login,
    logout
  }
}
