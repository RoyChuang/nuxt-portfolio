<script setup lang="ts">
import { Users } from 'lucide-vue-next'
const route = useRoute()
const aa = 'test'
const active = ref(true)
</script>

<template>
  <div>
    <div>
      <h1 class="mb-6 text-2xl font-bold">Dashboard</h1>
      <n-grid :cols="4" :x-gap="16" :y-gap="16">
        <n-grid-item>
          <n-card>
            <div class="flex items-center gap-4">
              <Users class="h-8 w-8 text-blue-500" />
              <div>
                <div class="text-sm text-gray-600">Total Users</div>
                <div class="text-2xl font-bold">2,345</div>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <!-- 其他統計卡片 -->
      </n-grid>
    </div>

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
