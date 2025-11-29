import { grupoFind, grupoRegister } from "../controllers/gruposController.js";
import express from 'express'
import { authVerify } from "../middlewares/authMid.js";

const router = express.Router();

//!Cadastro do grupo
router.post("/register", authVerify, grupoRegister);

//!Load de grupos do usuário logado
router.get("/grupos", authVerify, grupoFind)

export default router;
