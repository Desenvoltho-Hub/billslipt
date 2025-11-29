import mongoose from "mongoose";
import Despesa from "../models/Despesa.js";
import Grupo from "../models/Grupo.js";

//====================================================================
// !<despesaCreate>
//====================================================================
export const despesaCreate = async ({ id, titulo, total }) => {
  try {
    const grupoExist = await Grupo.findById( id );
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
    return response
  } catch (err) {
    throw err;
  }
};
