import Joi from "joi";


export const intermediateSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    type:Joi.string().valid('Beginner', 'Intermediate', 'Advanced').required(),
    

});
 