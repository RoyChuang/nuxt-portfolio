<template>
  <div>
    <div class="mb-6 flex items-center justify-between">
      <h1 class="text-2xl font-bold">Users</h1>
      <n-button type="primary">Add User</n-button>
    </div>

    <n-data-table :columns="columns" :data="data" :pagination="pagination" />
  </div>
</template>

<script setup lang="ts">
const columns = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Email',
    key: 'email',
  },
  {
    title: 'Role',
    key: 'role',
  },
]

const data = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
  },
]

const pagination = {
  pageSize: 10,
}
</script>
