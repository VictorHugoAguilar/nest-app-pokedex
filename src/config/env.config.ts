export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONDODB,
  api_pokemon: process.env.API_POKEMON,
  port: process.env.PORT || '3001',
  default_limit: process.env.DEFAULT_LIMIT || 5,
  default_offset: process.env.DEFAULT_OFFSET || 0,
});
