export default {
  async findByPathAndDay(ctx) {
    const { learningPath, week, day } = ctx.params;
    
    const entries = await strapi.db.query('api::reading-content.reading-content').findMany({
      where: {
        learningPath,
        week: parseInt(week),
        day: parseInt(day),
      },
      populate: ['tags', 'relatedContent'],
    });

    return entries;
  },

  async findByExamAndLanguage(ctx) {
    const { examType, language } = ctx.params;
    
    const entries = await strapi.db.query('api::reading-content.reading-content').findMany({
      where: {
        examType,
        language,
      },
      populate: ['tags', 'relatedContent'],
    });

    return entries;
  },
}; 