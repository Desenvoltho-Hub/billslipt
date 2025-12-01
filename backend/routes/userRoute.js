import express from "express";
import { userLogin, userRegister, userWho } from "../controllers/userController.js";
import { authVerify } from "../middlewares/authMid.js";

const router = express.Router();

//!Cadastro do usuário
router.post("/register", userRegister);

//!Login do usuário
router.post("/login", userLogin);
//!Usuário get
router.get("/usuario", authVerify, userWho )

export default router;
