export default ({ env }) => ({
  proxy: true,
  url: env('PUBLIC_URL'),
  port: 1337,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
