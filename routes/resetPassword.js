import { Router } from "express";
import { forgotPassword, resetPassword, verifyCode } from "../controllers/resetPasswordcontroller.js";
const passwordRouter = Router();

passwordRouter.post("/auth/password/recover", forgotPassword);
passwordRouter.post("/auth/password/verify-code", verifyCode);
passwordRouter.post("/auth/password/change", resetPassword);

export { passwordRouter };