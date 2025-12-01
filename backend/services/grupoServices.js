import Grupo from "../models/Grupo.js";
import User from "../models/User.js";

//====================================================================
// !<grupoLoad>
//====================================================================
export const grupoLoad = async ({ user }) => {
  try {
    const response = await Grupo.find({ members: user });
    return response;
  } catch (err) {
    throw err;
  }
};

//====================================================================
// !<grupoSelect>
//====================================================================
export const grupoSelect = async ({ id }) => {
  try {
    const groupExist = await Grupo.findById(id).populate("members", "name")
    if (!groupExist) {
      throw new Error('O grupo não existe')
    }
    return groupExist
  } catch(err) {
    throw err
  }
}
//====================================================================
// !<grupoMemberAdd>
//====================================================================
export const grupoMemberAdd = async ({ id, membro }) => {
  const membroId = await User.findOne({email})
  try {
    const response = await Grupo.findByIdAndUpdate(
      id, 
      { $push: { members: membroId.id } },
      { new: true } 
    );
    return response;
  } catch (err) {
    throw err;
  }
};