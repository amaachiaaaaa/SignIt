import Joi from "joi";


export const questionSchema = Joi.object({
    questionText:Joi.string().required(),
    possibleAnswers:Joi.string().required(),
    correctAnswer:Joi.string().required(),
});
 