import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addIntermediateLevel, allIntermediateLevel, deleteIntermediateLevel, getIntermediateLevel, updateIntermediateLevel } from "../controllers/intermediatecontroller.js";

export const intermediateRouter = Router();

intermediateRouter.post('/intermediate', isAuthenticated,addIntermediateLevel );
intermediateRouter.get('/intermediate', getIntermediateLevel);
intermediateRouter.get('/intermediate:id', allIntermediateLevel);
intermediateRouter.patch('/intermediate:id', isAuthenticated, updateIntermediateLevel);
intermediateRouter.delete('/intermediate:id', isAuthenticated, deleteIntermediateLevel);