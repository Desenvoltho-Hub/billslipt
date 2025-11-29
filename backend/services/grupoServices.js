import Grupo from "../models/Grupo.js";

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
