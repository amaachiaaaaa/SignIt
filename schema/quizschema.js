import Joi from "joi";


export const quizSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    questions:Joi.ref('Question'),
});
 