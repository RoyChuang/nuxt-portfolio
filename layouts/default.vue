<template>
  <ClientOnly>
    <n-layout>
      <!-- Header -->
      <n-layout-header bordered :inverted="inverted">
        <div class="flex items-center justify-between px-4 py-2">
          <div class="flex items-center gap-2">
            <MenuIcon class="h-6 w-6 cursor-pointer md:hidden" @click="toggleMobileSidebar" />
            <div class="text-lg font-bold">My App</div>
          </div>
          <LogOutIcon class="h-6 w-6 cursor-pointer" @click="handleLogout" />
        </div>
      </n-layout-header>

      <n-layout has-sider>
        <!-- Desktop Sidebar -->
        <n-layout-sider
          bordered
          class="hidden md:block"
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="isSidebarCollapsed"
          show-trigger="arrow-circle"
          @collapse="isSidebarCollapsed = true"
          @expand="isSidebarCollapsed = false"
        >
          <n-menu
            :collapsed="isSidebarCollapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :inverted="inverted"
          />
        </n-layout-sider>

        <!-- Mobile Sidebar Drawer -->
        <n-drawer v-model:show="showMobileSidebar" :width="240" placement="left">
          <n-menu :options="menuOptions" :inverted="inverted" />
        </n-drawer>

        <!-- Content -->
        <n-layout-content>
          <div class="p-4">
            <slot />
          </div>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  User as UserIcon,
  Settings as SettingsIcon,
  LogOut as LogOutIcon,
} from 'lucide-vue-next'
import { useAuth } from '@/composables/useAuth'

const auth = useAuth()
const inverted = ref(false)
const isSidebarCollapsed = ref(false)
const showMobileSidebar = ref(false)

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const toggleMobileSidebar = () => {
  showMobileSidebar.value = !showMobileSidebar.value
}

const handleLogout = () => {
  auth.logout()
}

const menuOptions = [
  {
    label: 'Home',
    key: 'home',
    icon: () => h(HomeIcon, { size: 18 }),
  },
  {
    label: 'Profile',
    key: 'profile',
    icon: () => h(UserIcon, { size: 18 }),
  },
  {
    label: 'Settings',
    key: 'settings',
    icon: () => h(SettingsIcon, { size: 18 }),
  },
]
</script>

<style scoped>
.n-layout-header {
  height: 64px;
  padding: 0;
  background-color: #fff;
}

.n-layout-sider {
  background-color: #fff;
}

.n-layout-content {
  background-color: #f5f5f5;
  min-height: calc(100vh - 64px);
}

/* 移動端樣式 */
@media (max-width: 768px) {
  .n-layout-content {
    padding: 0;
  }
}
</style>
