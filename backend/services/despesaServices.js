import mongoose from "mongoose";
import Despesa from "../models/Despesa.js";
import Grupo from "../models/Grupo.js";

//====================================================================
// !<despesaCreate>
//====================================================================
export const despesaCreate = async ({ id, titulo, total }) => {
  try {
    const grupoExist = await Grupo.findById(id);
    if (!grupoExist) {
      throw new Error("O grupo não existe!");
    }
    if (!id || !titulo || !total) {
      throw new Error(
        "Todos os dados são necessários para criar uma nova despesa!"
      );
    }
    const response = await Despesa.create({
      titulo,
      total,
      grupoId: id,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
//====================================================================
// !<despesaPopulate>
//====================================================================
export const despesaPopulate = async ({ id }) => {
  try {
    const despesaExist = await Despesa.findById(id)
      .populate("pagoPor")
      .populate("participantes.memberId")
      .populate("grupoId");
    if (!despesaExist) {
      throw new Error("Despesa não existente ou inválida");
    }

    return despesaExist;
  } catch (err) {
    throw err;
  }
};
//====================================================================
// !<despesaInvite>
//====================================================================
export const despesaInvite = async ({ id, membros }) => {
  if (!Array.isArray(membros)) membros = [membros];

  const membrosAtualizados = membros
    .filter(m => m.memberId && mongoose.Types.ObjectId.isValid(m.memberId))
    .map(m => ({
      memberId: mongoose.Types.ObjectId(m.memberId),
      amount: m.amount ?? 0
    }));

  const response = await Despesa.findByIdAndUpdate(
    id,
    { $push: { participantes: { $each: membrosAtualizados } } },
    { new: true, runValidators: true }
  );

  return response;
};
//====================================================================
// !<despesaGroup>
//====================================================================
export const despesaGroup = async (id) => {
  try {
    const grupo = await Grupo.findById(id);
    if (!grupo) {
      throw new Error("Grupo não encontrado!");
    }
    const despesaPorGrupo = await Despesa.find({ grupoId: id })
      .populate("pagoPor")
      .populate("participantes.memberId")
      .populate("grupoId");
    return despesaPorGrupo;
  } catch (err) {
    throw err;
  }
};
