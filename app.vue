<template>
  <div>
    <n-loading-bar-provider>
      <LoadingProvider />
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <!-- Global Loading -->
            <div
              id="global-loading"
              class="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-200"
            >
              <n-spin size="large" />
            </div>

            <!-- App Content -->
            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </div>
</template>
