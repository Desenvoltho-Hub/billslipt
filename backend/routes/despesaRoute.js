import express from 'express'
import { authVerify } from "../middlewares/authMid.js";
import { despesaSend } from '../controllers/despesaController.js';

const router = express.Router();

//!Criar despesa
router.post("/despesa/:id", authVerify, despesaSend);


export default router;
