<template>
  <div class="my-4 flex flex-col space-y-4 p-4">
    <nuxt-link class="text-blue-500" to="category/1">{{ '前往指定類別' }}</nuxt-link>
    <nuxt-link class="text-blue-500" to="category/1/posts/1">{{ '前往指定類別文章' }}</nuxt-link>
    <nuxt-link class="text-blue-500" to="category/top-3">{{ '前往top-3' }}</nuxt-link>
    <nuxt-link class="text-blue-500" to="category/top-8">{{ '前往top-8' }}</nuxt-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
