export default defineEventHandler((event) => {
  const name = event.context.params.name;
  return `Hello, ${name}!`;
});
