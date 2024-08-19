import { Router } from "express";
import { addQuestion, deleteQuestion } from "../controllers/questioncontroller.js";
import { isAuthenticated} from "../middlewares/auth.js";

export const questionRouter = Router();

questionRouter.post('/:quizId/questions', isAuthenticated, addQuestion);
questionRouter.delete('/:quizId/questions/:questionId', isAuthenticated, deleteQuestion);



