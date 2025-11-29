import { grupoCreate } from "../services/grupoRegister.js";
import { grupoLoad } from "../services/grupoServices.js";

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
