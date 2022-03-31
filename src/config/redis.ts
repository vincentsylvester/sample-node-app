const redisConfig = {
  host: process.env.REDIS_HOST,
  port: +process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  db: process.env.REDIS_DATABASE,
  prefix: process.env.CACHE_PREFIX,
};

export { redisConfig };
