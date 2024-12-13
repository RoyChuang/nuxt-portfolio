<template>
  <div>
    <div class="mb-6 flex items-center justify-between">
      <h1 class="text-2xl font-bold">Roles</h1>
      <n-button type="primary">Add Role</n-button>
    </div>

    <n-data-table :columns="columns" :data="data" :pagination="pagination" />
  </div>
</template>

<script setup lang="ts">
const columns = [
  {
    title: 'Role Name',
    key: 'name',
  },
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Permissions',
    key: 'permissions',
  },
]

const data = [
  {
    name: 'Admin',
    description: 'Full system access',
    permissions: 'All',
  },
]

const pagination = {
  pageSize: 10,
}
</script>
