import Grupo from "../models/Grupo.js";
import { grupoCreate } from "../services/grupoRegister.js";
import { grupoLoad, grupoMemberAdd, grupoSelect } from "../services/grupoServices.js";

//====================================================================
// !<grupoRegister>
//====================================================================
export const grupoRegister = async (req, res) => {
  try {
    const { name, description } = req.body;
    const creator = req.user;
    const response = await grupoCreate({ name, description, creator });
    res.status(201).json({ message: "Grupo criado com sucesso!", response });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//====================================================================
// !<grupoFind>
//====================================================================
export const grupoFind = async (req, res) => {
  const user = req.user.id;
  
  try {
    const response = await grupoLoad({ user });
    res
      .status(200)
      .json({ message: "Grupos encontrados com sucesso!", response });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//====================================================================
// !<grupoSelecionado>
//====================================================================
export const grupoSelecionado = async(req , res) => {
  const id = req.params.id;
  console.log("ID recebido:", id);

  try {
    const grupo = await Grupo.findById(id);
    

    const grupoPopulado = await Grupo.findById(id).populate("members", "name");


    if (!grupoPopulado) {
      return res.status(404).json({ message: "Grupo não encontrado" });
    }

    res.status(200).json({ message: "Grupo encontrado com sucesso!", response: grupoPopulado });
  } catch (err) {
    console.log("Erro:", err);
    res.status(400).json({ message: err.message });
  }
};
//====================================================================
// !<grupoAdd>
//====================================================================
export const grupoAdd = async (req, res) => {
  const id = req.params.id
  const membro = req.body.email
  console.log(id, membro)
  try {
    const response = await grupoMemberAdd({id, membro})
    res.status(200).json({message: 'Membro adicionado com sucesso!', response})
  } catch(err) {
    res.status(400).json({message: 'Erro ao adicionar membro', err})
  }
}
