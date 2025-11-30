import express from "express";
import { authVerify } from "../middlewares/authMid.js";
import {
  despesaGet,
  despesaGrupo,
  despesaPut,
  despesaSend,
} from "../controllers/despesaController.js";

const router = express.Router();

//!Criar despesa
router.post("/despesa/:id", authVerify, despesaSend);
//!Popular despesa
router.get("/popular/:id", authVerify, despesaGet);
//!Adicionar participantes
router.put("/adicionar/:id", authVerify, despesaPut);
//!Despesas por grupo
router.get("/grupo/:id", authVerify, despesaGrupo);
//!Despesas totais
router.get("/despesas/:id", authVerify)

export default router;
