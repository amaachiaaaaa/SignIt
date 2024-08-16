import Joi from "joi";


export const advancedSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    type:Joi.string().valid('Beginner', 'Intermediate', 'Advanced').required(),
    

});
 