import { grupoRegister } from "../controllers/gruposController.js";
import express from 'express'
import { authVerify } from "../middlewares/authMid.js";

const router = express.Router();

//!Cadastro do grupo
router.post("/register", authVerify, grupoRegister);

export default router;
