<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50">
    <n-card class="w-[400px]">
      <template #header>
        <div class="text-center text-2xl font-bold">{{ $t('login.title') }}</div>
      </template>

      <n-form
        ref="formRef"
        :model="formValue"
        :rules="formRules"
        label-placement="left"
        label-width="100"
      >
        <n-form-item :label="$t('login.email')" path="email">
          <n-input v-model:value="formValue.email" />
        </n-form-item>
        <n-form-item :label="$t('login.password')" path="password">
          <n-input v-model:value="formValue.password" type="password" show-password-on="click" />
        </n-form-item>
      </n-form>

      <template #footer>
        <div class="flex flex-col gap-4">
          <n-button type="primary" block @click="handleLogin">
            {{ $t('login.submit') }}
          </n-button>
          <div class="text-center text-sm text-gray-600">
            {{ $t('login.noAccount') }}
            <NuxtLink to="/register" class="text-blue-600">
              {{ $t('login.register') }}
            </NuxtLink>
          </div>
        </div>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const message = useMessage()
const formRef = ref()
const formValue = ref({
  email: '',
  password: '',
})
const formRules = computed(() => ({
  email: [
    { required: true, message: t('login.emailRequired') },
    { type: 'email', message: t('login.emailInvalid') },
  ],
  password: [
    { required: true, message: t('login.passwordRequired') },
    { min: 6, message: t('login.passwordLength') },
  ],
}))

const handleLogin = async () => {
  try {
    await formRef.value?.validate()
    message.success(t('login.success'))
  } catch (err) {
    message.error(t('login.error'))
  }
}
</script>
