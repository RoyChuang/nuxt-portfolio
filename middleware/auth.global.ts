import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to) => {
  const isLoggedIn = useState('isLoggedIn')
  console.log('Middleware:', { isLoggedIn: isLoggedIn.value, path: to.path })

  if (isLoggedIn.value && to.path === '/login') {
    return navigateTo('/')
  }

  if (!isLoggedIn.value && to.path !== '/login') {
    return navigateTo('/login')
  }
})
