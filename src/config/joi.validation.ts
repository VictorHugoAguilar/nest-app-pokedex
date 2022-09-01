import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.number().default(3005),
  MONDODB: Joi.required(),
  API_POKEMON: Joi.required(),
  DEFAULT_LIMIT: Joi.number().default(5),
  DEFAULT_OFFSET: Joi.number().default(0),
});
