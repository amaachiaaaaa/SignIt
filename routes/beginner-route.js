import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addBeginnerLevel, allBeginnerLevel, deleteBeginnerLevel, getBeginnerLevel, updateBeginnerLevel } from "../controllers/beginnercontroller.js";

export const beginnerRouter = Router();

beginnerRouter.post('/beginner', isAuthenticated , addBeginnerLevel);
beginnerRouter.get('/beginner', getBeginnerLevel);
beginnerRouter.get('/beginner:id', allBeginnerLevel);
beginnerRouter.patch('/beginner:id', isAuthenticated , updateBeginnerLevel);
beginnerRouter.delete('/beginner:id', isAuthenticated , deleteBeginnerLevel);