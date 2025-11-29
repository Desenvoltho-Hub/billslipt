import express from "express";
import { authVerify } from "../middlewares/authMid.js";
import {
  despesaGet,
  despesaPut,
  despesaSend,
} from "../controllers/despesaController.js";

const router = express.Router();

//!Criar despesa
router.post("/despesa/:id", authVerify, despesaSend);
//!Popular despesa
router.get("/participantes/:id", authVerify, despesaGet);
//!Adicionar participantes
router.put("/adicionar/:id", authVerify, despesaPut);

export default router;
