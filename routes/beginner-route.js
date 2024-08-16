import { Router } from "express";
import { isAuthenticated, hasPermission } from "../middlewares/auth.js";
import { addBeginnerLevel, allBeginnerLevel, deleteBeginnerLevel, getBeginnerLevel, updateBeginnerLevel } from "../controllers/beginnercontroller.js";

export const beginnerRouter = Router();

beginnerRouter.post('/tutorials/beginner' ,hasPermission('admin'), addBeginnerLevel);
beginnerRouter.get('/tutorials/beginner',hasPermission('admin'), getBeginnerLevel);
beginnerRouter.get('/tutorials/beginner:id',hasPermission('admin'), allBeginnerLevel);
beginnerRouter.patch('/tutorials/beginner:id',hasPermission('admin'), isAuthenticated , updateBeginnerLevel);
beginnerRouter.delete('/tutorials/beginner:id',hasPermission('admin'), isAuthenticated , deleteBeginnerLevel);