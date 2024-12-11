const BASE_URL = 'https://fellow-letter.pockethost.io/api'

interface LoginResponse {
  token: string
  record: {
    id: string
    email: string
    // 其他用戶欄位...
  }
}

export const useApi = () => {
  const login = async (email: string, password: string) => {
    return await useFetch<LoginResponse>(`${BASE_URL}/collections/users/auth-with-password`, {
      method: 'POST',
      body: {
        identity: email,
        password: password
      }
    })
  }

  return {
    login
  }
} 