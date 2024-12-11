export const useAuth = () => {
  const user = useState('user', () => null)
  const authCookie = useCookie('auth_token', {
    maxAge: 60 * 60 * 24 * 7, // 7天
    // secure: true,  // 只在 HTTPS 下傳送
    // sameSite: 'strict',  // 防止 CSRF 攻擊
    // httpOnly: true  // 防止 XSS 攻擊，JavaScript 無法讀取
  })
  const router = useRouter()
  const api = useApi()

  const login = async (email: string, password: string) => {
    const { data, error } = await api.login(email, password)
    
    if (error.value) {
      throw error.value
    }

    if (data.value) {
      user.value = data.value.record
      authCookie.value = data.value.token
      await router.push('/')
    }

    return data.value
  }

  const logout = () => {
    user.value = null
    authCookie.value = null
    router.push('/login')
  }

  return {
    user,
    login,
    logout
  }
}
