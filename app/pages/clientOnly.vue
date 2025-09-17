<template>
  <div>
    <ClientOnly class="flex flex-col items-center justify-center">
      <BaseFooButton />
      <template #fallback>
        <p class="my-6 flex justify-center">{{ 'loading...' }}</p>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
