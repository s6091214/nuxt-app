<template>
  <div>
    <!-- <img src="/bg.jpg" alt="bg" class="m-auto h-auto" />
    <img src="~assets/test.jpg" alt="bg" class="m-auto h-auto" /> -->
    <h1 class="flex p-4 text-3xl font-bold">{{ '首页' }}</h1>
    <div class="inline-flex flex-col p-4">
      <NuxtLink v-for="link in links" :key="link.to" class="text-blue-500 underline" :to="link.to"
        >{{ link.label }}
      </NuxtLink>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const links = [
  { to: '/', label: 'Go to index' },
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
  { to: '/auth', label: 'Go to Auth' },
  { to: '/count/ref', label: 'Go to Count Ref' },
  { to: '/count/useState', label: 'Go to Count useState' },
  { to: '/counter/increment', label: 'Go to Counter Increment' },
  { to: '/counter/surprise', label: 'Go to Counter Surprise' },
  { to: '/locale', label: 'Go to Locale' },
  { to: '/piniaCounter', label: 'Go to Pinia Counter' },
  { to: '/show', label: 'Go to Show Double Count' },
  { to: '/runtimeConfig', label: 'Go to RuntimeConfig' },
  { to: '/config', label: 'Go to Config' },
  { to: '/login', label: 'Go to Login' },
  { to: '/login/googleCredential', label: 'Go to Google Credential Login' },
  { to: '/login/googleAuthCode', label: 'Go to Google Auth Code Login' },
  { to: '/login/googleAuthToken', label: 'Go to Google Auth Token Login' },
  { to: '/i18nPage', label: 'Go to i18n Page' },
];
definePageMeta({
  middleware: 'auth',
});
</script>
