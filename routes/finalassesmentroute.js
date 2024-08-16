import { Router } from "express";
import { isAuthenticated,hasPermission } from "../middlewares/auth.js";
import { addFinalAssesment, allFinalAssesment, deleteFinalAssesment, getFinalAssesment, updateFinalAssessment } from "../controllers/finalassesmentcontroller.js";

export const finalAssesmentRouter = Router();

finalAssesmentRouter.post('/finalAssesment',hasPermission('admin'), isAuthenticated , addFinalAssesment);
finalAssesmentRouter.get('/finalAssesment',hasPermission('admin'), getFinalAssesment);
finalAssesmentRouter.get('/finalAssesment:id',hasPermission('admin'), allFinalAssesment);
finalAssesmentRouter.patch('/finalAssesment:id',hasPermission('admin'), isAuthenticated , updateFinalAssessment);
finalAssesmentRouter.delete('/finalAssesment:id', isAuthenticated,hasPermission('admin'), deleteFinalAssesment);