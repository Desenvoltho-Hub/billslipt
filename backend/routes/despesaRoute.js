import express from 'express'
import { authVerify } from "../middlewares/authMid.js";
import { despesaGet, despesaSend } from '../controllers/despesaController.js';

const router = express.Router();

//!Criar despesa
router.post("/despesa/:id", authVerify, despesaSend);
router.get("/participantes/:id", authVerify, despesaGet )


export default router;
