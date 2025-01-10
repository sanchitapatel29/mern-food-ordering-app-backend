import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import {validateMyUserRequest, handleValidationErrors} from "../middleware/validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser as express.RequestHandler);
router.post("/", jwtCheck, MyUserController.createCurrentUser as express.RequestHandler);
router.put(
    "/", 
    jwtCheck, 
    jwtParse, 
    ...validateMyUserRequest, 
    handleValidationErrors,
    MyUserController.updateCurrentUser as express.RequestHandler);

export default router;

