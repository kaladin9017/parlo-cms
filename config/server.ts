export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  ssl: {
    enabled: env.bool('SSL_ENABLED', false),
    rejectUnauthorized: env.bool('SSL_REJECT_UNAUTHORIZED', false),
  },
});
