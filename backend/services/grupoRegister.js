import mongoose from "mongoose"
import Grupo from "../models/Grupo.js"
//====================================================================
// !<grupoCreate>
//====================================================================
export const grupoCreate = async ({name, description, creator}) => {
    try {
        if(!name || !description) {
            throw new Error('O grupo precisa ter nome, descrição')
        }
        const response = await Grupo.create({
            name,
            description,
            creator: new mongoose.Types.ObjectId(creator),
            members: [new mongoose.Types.ObjectId(creator)]
        })
        return response
    } catch(err) {
        throw err
    }
}