import { ref, onMounted, onUnmounted } from 'vue'

export function useOnline() {
  const online = ref(true)

  const updateOnlineStatus = () => {
    online.value = navigator?.onLine ?? true
  }

  onMounted(() => {
    updateOnlineStatus()
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
  })

  onUnmounted(() => {
    window.removeEventListener('online', updateOnlineStatus)
    window.removeEventListener('offline', updateOnlineStatus)
  })

  return {
    online,
  }
}
