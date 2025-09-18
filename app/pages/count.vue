<template>
  <div class="flex flex-col items-center justify-center p-4">
    <p class="my-6 flex justify-center text-3xl">{{ count }}</p>
    <div class="mb-6 flex">
      <button
        class="mr-4 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-200 hover:bg-blue-600"
        @click="increment"
      >
        +1
      </button>
      <button
        class="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-200 hover:bg-blue-600"
        @click="decrement"
      >
        -1
      </button>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { count, increment, decrement } = useCounter();
</script>

<style scoped></style>
