import { Router } from "express";
import { isAuthenticated} from "../middlewares/auth.js";
import { addFinalAssesment, allFinalAssesment, deleteFinalAssesment, getFinalAssesment, updateFinalAssessment } from "../controllers/finalassesmentcontroller.js";

export const finalAssesmentRouter = Router();

finalAssesmentRouter.post('/finalAssesment', isAuthenticated , addFinalAssesment);
finalAssesmentRouter.get('/finalAssesment', getFinalAssesment);
finalAssesmentRouter.get('/finalAssesment:id', allFinalAssesment);
finalAssesmentRouter.patch('/finalAssesment:id', isAuthenticated , updateFinalAssessment);
finalAssesmentRouter.delete('/finalAssesment:id', isAuthenticated, deleteFinalAssesment);