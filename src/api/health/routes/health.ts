export default {
  routes: [
    {
      method: 'GET',
      path: '/health',
      handler: 'health.health',
      config: {
        auth: false,
      },
    },
  ],
}; 