export default defineEventHandler(() => {
  console.log('接收到 API 請求 /api/about');

  return {
    name: 'test',
    gender: '男',
    email: 'test@gmail.com',
  };
});
