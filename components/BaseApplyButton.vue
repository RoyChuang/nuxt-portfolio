<template>
  <div class="flex items-center gap-4 p-4">
    <BaseTestButton />
    <n-button @click="handleStart"> 开始 </n-button>
    <n-button :disabled="disabled" @click="handleFinish"> 结束 </n-button>
  </div>
</template>

<script lang="ts">
import { useLoadingBar } from 'naive-ui'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const loadingBar = useLoadingBar()
    const disabledRef = ref(true)
    return {
      disabled: disabledRef,
      handleStart() {
        loadingBar.start()
        disabledRef.value = false
      },
      handleFinish() {
        loadingBar.finish()
        disabledRef.value = true
      },
    }
  },
})
</script>
