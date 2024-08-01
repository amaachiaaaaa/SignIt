import Joi from "joi";


export const finalAssesmentSchema = Joi.object({
    video:Joi.string().required(),
    quiz:Joi.string().required()
});
 