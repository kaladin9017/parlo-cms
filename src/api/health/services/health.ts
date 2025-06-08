export default {
  checkHealth: async () => {
    try {
      await strapi.db.connection.raw('SELECT 1');
      return true;
    } catch (error) {
      return false;
    }
  },
}; 