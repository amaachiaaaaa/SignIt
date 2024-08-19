import { Router } from "express";
import { isAuthenticated} from "../middlewares/auth.js";
import { addCourses, allCourses, deleteCourse, getCourse, updateCourse } from "../controllers/coursecontroller.js";

export const courseRouter = Router();

courseRouter.post('/tutorials/course',  addCourses);
courseRouter.get('/tutorials/course:id',  getCourse);
courseRouter.get('/tutorials/course',  allCourses);
courseRouter.patch('/tutorials/course:id',  isAuthenticated, updateCourse);
courseRouter.delete('/tutorials/course:id',  isAuthenticated, deleteCourse);