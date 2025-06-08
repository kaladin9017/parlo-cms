export default {
  routes: [
    {
      method: 'GET',
      path: '/reading-contents',
      handler: 'reading-content.find',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/reading-contents/:id',
      handler: 'reading-content.findOne',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/reading-contents/path/:learningPath/week/:week/day/:day',
      handler: 'reading-content.findByPathAndDay',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/reading-contents/exam/:examType/language/:language',
      handler: 'reading-content.findByExamAndLanguage',
      config: {
        policies: [],
        auth: false,
      },
    }
  ],
}; 