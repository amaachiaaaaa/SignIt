import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addIntermediateLevel, allIntermediateLevel, deleteIntermediateLevel, getIntermediateLevel, updateIntermediateLevel } from "../controllers/intermediatecontroller.js";

export const intermediateRouter = Router();

intermediateRouter.post('/tutorials/intermediate', isAuthenticated,addIntermediateLevel );
intermediateRouter.get('/tutorials/intermediate', getIntermediateLevel);
intermediateRouter.get('/tutorials/intermediate:id', allIntermediateLevel);
intermediateRouter.patch('/tutorials/intermediate:id', isAuthenticated, updateIntermediateLevel);
intermediateRouter.delete('/tutorials/intermediate:id', isAuthenticated, deleteIntermediateLevel);