import * as Joi from 'joi';
// import Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.string().required(),
    PORT: Joi.number().default(3005),
    PAGINATION_DEFAULT_LIMIT: Joi.number().default(6),
});