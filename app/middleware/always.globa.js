export default defineNuxtRouteMiddleware((to, from) => {
  console.log('全域中介層');
  if (to.fullPath === from.fullPath) return;
});
