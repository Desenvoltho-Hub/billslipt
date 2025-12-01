import Despesa from "../models/Despesa.js";
import {
  despesaCreate,
  despesaGroup,
  despesaInvite,
  despesaPopulate,
} from "../services/despesaServices.js";
import mongoose from "mongoose";

//====================================================================
// !<despesaSend>
//====================================================================
export const despesaSend = async (req, res) => {
  const { titulo, total } = req.body;
  const id = req.params.id;
  try {
    const response = await despesaCreate({ titulo, total, id });
    res.status(201).json({ message: "Despesa criada com sucesso!", response });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//====================================================================
// !<despesaGet>
//====================================================================
export const despesaGet = async (req, res) => {
  const id = req.params.id;
  console.log("ID RECEBIDO:", req.params.id);
  console.log("TIPO:", typeof req.params.id);

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    console.log("ID INVÁLIDO!");
  }
  try {
    const response = await despesaPopulate({ id });
    return res
      .status(200)
      .json({ message: "Despesa populada com sucesso", response });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};
//====================================================================
// !<despesaPut>
//====================================================================
//====================================================================
// !<despesaPut> - adiciona participantes a uma despesa
//====================================================================
export const despesaPut = async (req, res) => {
  try {
    const id = req.params.id;

    if (
      !req.body ||
      !Array.isArray(req.body.membros) ||
      req.body.membros.length === 0
    ) {
      console.log("Formato inválido detectado");
      return res
        .status(400)
        .json({ message: "Nenhum membro enviado ou formato inválido" });
    }

    const membros = req.body.membros;

    const response = await despesaInvite({ id, membros });

    return res.status(200).json({
      message: "Novos participantes adicionados com sucesso!",
      response,
    });
  } catch (err) {
    console.error("Erro despesaPut:", err);
    return res.status(400).json({ message: err.message });
  }
};

//====================================================================
// !<despesaGrupo>
//====================================================================

export const despesaGrupo = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const response = await despesaGroup(id);

    res.status(200).json({
      message: "Despesas do grupo encontradas com sucesso!",
      response,
    });
  } catch (err) {
    console.log("Erro backend:", err);
    res.status(400).json({ message: err.message });
  }
};
