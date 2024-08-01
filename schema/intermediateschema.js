import Joi from "joi";


export const intermediateSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    type:Joi.string().valid('Beginner', 'Intermediate', 'Advanced').required(),
    module:Joi.string().required(),
    lesson:Joi.string().required(),
    video:Joi.string().required(),
    quiz:Joi.string().required(),
    finalAssesment:Joi.ref('FinalAssesment '),
});
 