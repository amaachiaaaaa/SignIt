import { Router } from "express";
import { isAuthenticated,hasPermission } from "../middlewares/auth.js";
import { addIntermediateLevel, allIntermediateLevel, deleteIntermediateLevel, getIntermediateLevel, updateIntermediateLevel } from "../controllers/intermediatecontroller.js";

export const intermediateRouter = Router();

intermediateRouter.post('/tutorials/intermediate', isAuthenticated,hasPermission('admin'),addIntermediateLevel );
intermediateRouter.get('/tutorials/intermediate',hasPermission('admin'), getIntermediateLevel);
intermediateRouter.get('/tutorials/intermediate:id',hasPermission('admin'), allIntermediateLevel);
intermediateRouter.patch('/tutorials/intermediate:id', isAuthenticated,hasPermission('admin'), updateIntermediateLevel);
intermediateRouter.delete('/tutorials/intermediate:id', isAuthenticated,hasPermission('admin'), deleteIntermediateLevel);