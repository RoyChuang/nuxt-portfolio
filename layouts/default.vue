<template>
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
        :width="200"
        :collapsed="isSidebarCollapsed"
        show-trigger="arrow-circle"
        @collapse="isSidebarCollapsed = true"
        @expand="isSidebarCollapsed = false"
      >
        <n-menu
          :value="activeKey"
          :collapsed="isSidebarCollapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :inverted="inverted"
          @update:value="handleMenuClick"
        />
      </n-layout-sider>

      <!-- Mobile Sidebar Drawer -->
      <n-drawer v-model:show="showMobileSidebar" :width="240" placement="left">
        <n-menu 
          :value="activeKey"
          :collapsed="isSidebarCollapsed" 
          :options="menuOptions" 
          :inverted="inverted" 
          @update:value="handleMenuClick" />
      </n-drawer>

      <!-- Content -->
      <n-layout-content>
        <div class="p-4">
          <slot />
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { LayoutDashboard, ListTodo, Users, Shield, Menu as MenuIcon, LogOut as LogOutIcon,} from 'lucide-vue-next'
import { useAuth } from '@/composables/useAuth'

const auth = useAuth()
const inverted = ref(false)
const isSidebarCollapsed = ref(false)
const showMobileSidebar = ref(false)

const toggleMobileSidebar = () => {
  showMobileSidebar.value = !showMobileSidebar.value
}

const handleLogout = () => {
  auth.logout()
}

const router = useRouter()
const route = useRoute()

// 修改 activeKey 的處理邏輯
const activeKey = ref(route.path === '/' ? 'dashboard' : route.path.substring(1))

// 監聽路由變化
watch(
  () => route.path,
  (newPath) => {
    activeKey.value = newPath === '/' ? 'dashboard' : newPath.substring(1)
  }
)

// 選單點擊處理
const handleMenuClick = (key: string) => {
  router.push(key === 'dashboard' ? '/' : `/${key}`)
}

const menuOptions = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: () => h(LayoutDashboard, { size: 18 })
  },
  {
    label: 'Tasks',
    key: 'tasks',
    icon: () => h(ListTodo, { size: 18 })
  },
  {
    label: 'Users',
    key: 'users',
    icon: () => h(Users, { size: 18 })
  },
  {
    label: 'Roles',
    key: 'roles',
    icon: () => h(Shield, { size: 18 })
  }
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
