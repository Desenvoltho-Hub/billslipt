import express from "express";
import { userLogin, userRegister } from "../controllers/userAuthController.js";
import { authVerify } from "../middlewares/authMid.js";

const router = express.Router();

//!Cadastro do usuário
router.post("/register", userRegister);

//!Login do usuário
router.post("/login", userLogin);


export default router;
