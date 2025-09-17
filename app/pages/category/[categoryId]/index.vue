<template>
  <div>指定的id:{{ categoryId }}</div>
</template>

<script setup lang="ts">
const route = useRoute();
const categoryId = route.params.categoryId;
</script>

<style scoped></style>
