import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to) => {
  const authCookie = useCookie('auth_token')

  // 如果有 token 且訪問登入頁，重定向到首頁
  if (authCookie.value && to.path === '/login') {
    return navigateTo('/')
  }

  // 如果沒有 token 且不是訪問登入頁，重定向到登入頁
  if (!authCookie.value && to.path !== '/login') {
    return navigateTo('/login')
  }
})
