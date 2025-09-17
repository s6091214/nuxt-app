export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath === from.fullPath) return;
});
