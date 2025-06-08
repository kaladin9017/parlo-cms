export default {
  check: async (ctx) => {
    try {
      // Check database connection
      await strapi.db.connection.raw('SELECT 1');
      
      ctx.status = 200;
      ctx.body = {
        status: 'ok',
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        status: 'error',
        message: error.message,
      };
    }
  },
}; 