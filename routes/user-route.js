import { getUser, getUsers, login, signup, token,logout } from "../controllers/usercontroller.js";
import { Router } from "express";


export const userRouter= Router();

userRouter.get('/users/auth/Users', getUsers)
userRouter.post('/users/auth/signup',signup);
userRouter.get('/users/auth/:userName', getUser),

userRouter.post('/users/auth/login/token',token) 
userRouter.post('/users/auth/logout', logout);

