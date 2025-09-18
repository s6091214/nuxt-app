<template>
  <div>
    <h1 class="flex p-4 text-3xl font-bold">{{ '首页' }}</h1>
    <div class="flex flex-col p-4">
      <NuxtLink v-for="link in links" :key="link.to" class="text-blue-500 underline" :to="link.to"
        >{{ link.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  { to: '/about', label: 'Go to About' },
  { to: '/contact', label: 'Go to Contact' },
  { to: '/test', label: 'Go to Test' },
  { to: '/clientOnly', label: 'Go to ClientOnly' },
  { to: '/count', label: 'Go to Count' },
  { to: '/scrollTo', label: 'Go to ScrollTo' },
  { to: '/icons', label: 'Go to Icons' },
  { to: '/about/fetch', label: 'Go to About Fetch' },
  { to: '/about/useFetch', label: 'Go to About useFetch' },
  { to: '/about/useAsyncData', label: 'Go to About useAsyncData' },
];
</script>
