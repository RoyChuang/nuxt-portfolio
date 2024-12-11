import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  const isLoggedIn = useState('isLoggedIn', () => false)

  if (!isLoggedIn.value && to.path !== '/login') {
    return navigateTo('/login')
  }
})
