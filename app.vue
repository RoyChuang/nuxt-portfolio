<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <div>
        <NuxtRouteAnnouncer />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </n-message-provider>
  </n-loading-bar-provider>
</template>
