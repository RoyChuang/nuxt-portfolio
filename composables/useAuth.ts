export const useAuth = () => {
  const isLoggedIn = useState('isLoggedIn', () => false)

  const login = () => {
    // 登录逻辑
    isLoggedIn.value = true
  }

  const logout = () => {
    isLoggedIn.value = false
  }

  return {
    isLoggedIn,
    login,
    logout,
  }
}
