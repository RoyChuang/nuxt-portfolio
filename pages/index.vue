<script setup lang="ts">
const route = useRoute()
const aa = 'test'
const active = ref(true)
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!{{ aa }}111</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">
      Learn more about Nuxt Routing
    </a>
    <br />
    <NuxtLink to="/login">login</NuxtLink>
    <BaseApplyButton />
    <n-button type="success"> Success </n-button>
    <n-space>
      <n-switch v-model:value="active" />
    </n-space>
  </div>
</template>
