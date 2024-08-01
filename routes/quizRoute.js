import { Router } from 'express';
import {deleteQuiz, addQuiz, allQuizzes, getQuiz } from "../controllers/quizcontroller.js"
import { isAuthenticated } from '../middlewares/auth.js';

export const quizRouter = Router();

quizRouter.post('/quiz', isAuthenticated, addQuiz);
quizRouter.get('/quiz',isAuthenticated, allQuizzes);
quizRouter.get('quiz/:id', isAuthenticated, getQuiz);
quizRouter.delete('quiz/:id', isAuthenticated, deleteQuiz);

