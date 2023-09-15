import Joi from 'joi';

export const PersonValidator = Joi.object({
    name: Joi.string()
    .min(3)
    .max(30)
    .required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    age:Joi.number().min(10)
})

