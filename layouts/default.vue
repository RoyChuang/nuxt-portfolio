<template>
  <ClientOnly>
    <div class="bg-sky-100">
      <slot name="header" />
      <slot />
    </div>
  </ClientOnly>
</template>
