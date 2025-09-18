<template>
  <div>
    <h1>{{ '套用自訂模板' }}</h1>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom',
  // middleware: 'random-redirect',
});
</script>

<style scoped></style>
