import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addBeginnerLevel, allBeginnerLevel, deleteBeginnerLevel, getBeginnerLevel, updateBeginnerLevel } from "../controllers/beginnercontroller.js";

export const beginnerRouter = Router();

beginnerRouter.post('/tutorials/beginner' , addBeginnerLevel);
beginnerRouter.get('/tutorials/beginner', getBeginnerLevel);
beginnerRouter.get('/tutorials/beginner:id', allBeginnerLevel);
beginnerRouter.patch('/tutorials/beginner:id', isAuthenticated , updateBeginnerLevel);
beginnerRouter.delete('/tutorials/beginner:id', isAuthenticated , deleteBeginnerLevel);