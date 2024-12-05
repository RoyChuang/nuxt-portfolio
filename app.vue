<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <template #header>
        <div class="bg-red-500">header</div>
      </template>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
