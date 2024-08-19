import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addModule, allModules, deleteModule, getModule, updateModule } from "../controllers/moduleController.js";

export const moduleRouter = Router();

moduleRouter.post('/modules', isAuthenticated, addModule);
moduleRouter.get('/modules', getModule);
moduleRouter.get('/modules:id', allModules);
moduleRouter.patch('/modules:id', isAuthenticated, updateModule);
moduleRouter.delete('/modules:id', isAuthenticated, deleteModule);