import { Router } from "express";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";
import { addAdvancedLevel, allAdvancedLevel, deleteAdvanceLevel, getAdvancedLevel, updateAdvancedLevel } from "../controllers/advancedcontroller.js";


export const advancedRouter = Router();

advancedRouter.post('/tutorials/advanced',hasPermission('admin'), isAuthenticated, addAdvancedLevel);
advancedRouter.get('/tutorials/advanced',hasPermission('admin'), getAdvancedLevel);
advancedRouter.get('/tutorials/advanced:id',hasPermission('admin'), allAdvancedLevel);
advancedRouter.patch('/tutorials/advanced:id',hasPermission('admin'), isAuthenticated, updateAdvancedLevel);
advancedRouter.delete('/tutorials/advanced:id', hasPermission('admin'),isAuthenticated, deleteAdvanceLevel);


