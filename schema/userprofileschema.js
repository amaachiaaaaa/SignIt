import Joi from "joi";

export const userProfileSchema = Joi.object({
    profilePicture: Joi.string(),
    age: Joi.string().required(),
    sex: Joi.string().valid('male', 'female').required(),
    dateOfBirth: Joi.string().required(),
    contact:Joi.string().required(),
    address:Joi.string().required(),
    about: Joi.string().required(),
   skillLevel:Joi.string().valid('Beginner', 'Intermediate', 'Advanced').required(),
   learningGoals:Joi.string().valid('short-term', 'long-term').required(),
   interests:Joi.string().required(),
    
});
