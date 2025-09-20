export default defineEventHandler(() => {
  const { googleRedirectUri } = useRuntimeConfig();
  return { redirectUri: googleRedirectUri };
});
