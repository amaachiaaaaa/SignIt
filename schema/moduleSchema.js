import Joi from "joi";


export const moduleSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    lesson:Joi.string().required(),
    video:Joi.string().required(),
});