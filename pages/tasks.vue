<template>
  <div>
    <div class="mb-6 flex items-center justify-between">
      <h1 class="text-2xl font-bold">Tasks</h1>
      <n-button type="primary">Add Task</n-button>
    </div>

    <n-data-table :columns="columns" :data="data" :pagination="pagination" />
  </div>
</template>

<script setup lang="ts">
const columns = [
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Due Date',
    key: 'dueDate',
  },
]

const data = [
  {
    title: 'Complete dashboard',
    status: 'In Progress',
    dueDate: '2024-01-20',
  },
]

const pagination = {
  pageSize: 10,
}
</script>
