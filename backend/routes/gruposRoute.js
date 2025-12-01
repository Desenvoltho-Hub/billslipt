import { grupoAdd, grupoFind, grupoRegister, grupoSelecionado } from "../controllers/gruposController.js";
import express from 'express'
import { authVerify } from "../middlewares/authMid.js";

const router = express.Router();

//!Cadastro do grupo
router.post("/register", authVerify, grupoRegister);

//!Load de grupos do usuário logado
router.get("/grupos", authVerify, grupoFind)

//!Get de grupo por id
router.get("/grupo/:id", authVerify, grupoSelecionado)

//!Add membro ao grupo
router.put("/grupoadd/:id", authVerify, grupoAdd)

export default router;
