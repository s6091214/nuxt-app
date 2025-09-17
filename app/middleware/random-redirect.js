export default defineNuxtRouteMiddleware(() => {
  if (Math.random() > 0.5) {
    return navigateTo('/haha');
  }
});
