<script setup>
const loadingBar = useLoadingBar()

onMounted(() => {
  const loading = document.getElementById('global-loading')

  if (loading) {
    loading.style.opacity = '0'
    loadingBar?.start()
    setTimeout(() => {
      loading.style.display = 'none'
      loadingBar?.finish()
    }, 100)
  }
})

const router = useRouter()
router.beforeEach(() => {
  loadingBar?.start()
})

router.afterEach(() => {
  loadingBar?.finish()
})

router.onError(() => {
  loadingBar?.error()
})
</script>

<template>
  <div></div>
</template>
