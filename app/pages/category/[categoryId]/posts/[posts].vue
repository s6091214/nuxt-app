<template>
  <div>指定的分類ID: {{ categoryId }}，指定的文章ID: {{ posts }}</div>
</template>

<script setup lang="ts">
const route = useRoute();
const { categoryId, posts } = route.params;
</script>

<style scoped></style>
