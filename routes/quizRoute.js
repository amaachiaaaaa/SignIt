import { Router } from 'express';
import {deleteQuiz, addQuiz, allQuizzes, getQuiz } from "../controllers/quizcontroller.js"
import { isAuthenticated, hasPermission} from '../middlewares/auth.js';

export const quizRouter = Router();

quizRouter.post('/quiz/', isAuthenticated,hasPermission('admin'), addQuiz);
quizRouter.get('/quiz/',isAuthenticated,hasPermission('admin'), allQuizzes);
quizRouter.get('/quiz/:id', isAuthenticated,hasPermission('admin'), getQuiz);
quizRouter.delete('/quiz/:id', isAuthenticated,hasPermission('admin'), deleteQuiz);

