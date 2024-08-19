import { Router } from "express";
import { isAuthenticated, hasPermission } from "../middlewares/auth.js";
import { addCourses, allCourses, deleteCourse, getCourse, updateCourse } from "../controllers/coursecontroller.js";

export const courseRouter = Router();

courseRouter.post('/tutorials/course', hasPermission('admin'), addCourses);
courseRouter.get('/tutorials/course', hasPermission('admin'), getCourse);
courseRouter.get('/tutorials/course:id', hasPermission('admin'), allCourses);
courseRouter.patch('/tutorials/course:id', hasPermission('admin'), isAuthenticated, updateCourse);
courseRouter.delete('/tutorials/course:id', hasPermission('admin'), isAuthenticated, deleteCourse);