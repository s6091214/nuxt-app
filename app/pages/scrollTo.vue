<template>
  <div class="flex flex-col items-center justify-center overflow-y-visible">
    <button v-scroll-to="'#element'" class="h-screen">Scroll to #element</button>

    <h1 id="element" class="h-screen">Hi. I'm element</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
