<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50">
    <div class="absolute right-4 top-4">
      <n-select
        v-model:value="locale"
        :options="languageOptions"
        size="small"
        @update:value="setLanguage"
      />
    </div>

    <n-card class="w-[400px] rounded-lg shadow-lg">
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
          <n-button 
            type="primary" 
            block 
            :loading="loading"
            :disabled="loading"
            @click="handleLogin"
          >
            {{ t('login.submit') }}
          </n-button>
        </div>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
import { useI18n } from 'vue-i18n'
import { ref, reactive } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useAuth } from '@/composables/useAuth'

const { t, locale } = useI18n()
const message = useMessage()
const formRef = ref(null)
const formValue = ref({
  email: '',
  password: ''
})
const loading = ref(false)

const languageOptions = [
  { label: '繁體中文', value: 'zh' },
  { label: 'English', value: 'en' },
]

const { setLanguage } = useLanguage()

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

const auth = useAuth()
console.log("🚀 ~ auth:", auth.isLoggedIn)

const handleLogin = async () => {
  try {
    loading.value = true
    await formRef.value?.validate()
    await auth.login(formValue.value.email, formValue.value.password)
    message.success(t('login.success'))
  } catch (err) {
    message.error(t('login.error'))
  } finally {
    loading.value = false
  }
}
</script>
