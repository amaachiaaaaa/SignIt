import { Router } from "express";
// import multer from "multer";
import { remoteUpload } from "../middlewares/uploads.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { addUserProfile, getUserProfile, updateUserProfile } from "../controllers/userProfileController.js";

// create upload midddleware
// const upload = multer({ dest: 'uploads/' })

const userProfileRouter = Router();

userProfileRouter.post('/users/userProfile', remoteUpload.single('profilePicture'), isAuthenticated, addUserProfile);

userProfileRouter.get('/users/userProfile', isAuthenticated, getUserProfile);

userProfileRouter.patch('/users/userProfile/:userProfileId', remoteUpload.single('profilePicture'), isAuthenticated, updateUserProfile);

export default userProfileRouter;


