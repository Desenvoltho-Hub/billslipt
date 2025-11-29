//====================================================================
// !<grupoRegister>

import { grupoCreate } from "../services/grupoRegister.js"

//====================================================================
export const grupoRegister = async (req, res) => {
    try {
        const {name, description} = req.body
        const creator = req.user
        const response = await grupoCreate({name, description, creator})
        res.status(201).json({message: 'Grupo criado com sucesso!', response})
    } catch(err) {
        res.status(400).json({message: err.message})
    }
}