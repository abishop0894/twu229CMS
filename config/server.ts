export default ({ env }) => ({
  proxy: true,
  host: env('PUBLIC_URL'),
  port: 1337,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
