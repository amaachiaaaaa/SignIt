import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addAdvancedLevel, allAdvancedLevel, deleteAdvanceLevel, getAdvancedLevel, updateAdvancedLevel } from "../controllers/advancedcontroller.js";


export const advancedRouter = Router();

advancedRouter.post('/advanced', isAuthenticated, addAdvancedLevel);
advancedRouter.get('/advanced', getAdvancedLevel);
advancedRouter.get('/advanced:id', allAdvancedLevel);
advancedRouter.patch('/advanced:id', isAuthenticated, updateAdvancedLevel);
advancedRouter.delete('/advanced:id', isAuthenticated, deleteAdvanceLevel);


