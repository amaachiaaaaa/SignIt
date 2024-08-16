import { Router } from "express";
import { addQuestion, deleteQuestion } from "../controllers/questioncontroller.js";
import { isAuthenticated, hasPermission} from "../middlewares/auth.js";

export const questionRouter = Router();

questionRouter.post('/:quizId/questions', isAuthenticated,hasPermission('admin'), addQuestion);
questionRouter.delete('/:quizId/questions/:questionId', isAuthenticated,hasPermission('admin'), deleteQuestion);



