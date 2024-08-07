import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addAdvancedLevel, allAdvancedLevel, deleteAdvanceLevel, getAdvancedLevel, updateAdvancedLevel } from "../controllers/advancedcontroller.js";


export const advancedRouter = Router();

advancedRouter.post('/tutorials/advanced', isAuthenticated, addAdvancedLevel);
advancedRouter.get('/tutorials/advanced', getAdvancedLevel);
advancedRouter.get('/tutorials/advanced:id', allAdvancedLevel);
advancedRouter.patch('/tutorials/advanced:id', isAuthenticated, updateAdvancedLevel);
advancedRouter.delete('/tutorials/advanced:id', isAuthenticated, deleteAdvanceLevel);


