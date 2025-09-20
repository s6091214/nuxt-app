<template>
  <div class="my-24 flex flex-col items-center">
    <span class="mt-4 text-2xl text-gray-600">回傳資料:</span>
    <p class="mt-4 text-3xl font-semibold text-blue-500">{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { apiBase } = config.public;

console.log('config :', config);
if (import.meta.server) {
  console.log('API secret:', config.apiSecret);
}

const { data } = await useFetch(`${apiBase}/hello`);
</script>

<style scoped></style>
