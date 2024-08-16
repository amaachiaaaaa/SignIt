import { Router } from "express";
import { isAuthenticated ,hasPermission} from "../middlewares/auth.js";
import { addModule, allModules, deleteModule, getModule, updateModule } from "../controllers/moduleController.js";

export const moduleRouter = Router();

moduleRouter.post('/modules', isAuthenticated,hasPermission('admin'), addModule);
moduleRouter.get('/modules', hasPermission('admin'),getModule);
moduleRouter.get('/modules:id',hasPermission('admin'), allModules);
moduleRouter.patch('/modules:id', isAuthenticated,hasPermission('admin'), updateModule);
moduleRouter.delete('/modules:id', isAuthenticated,hasPermission('admin'), deleteModule);