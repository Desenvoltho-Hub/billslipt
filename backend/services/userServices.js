import mongoose from "mongoose";
import User from "../models/User.js";
//====================================================================
// !<userGet>
//====================================================================

export const userGet = async (id) => {
  try {
    const response = await User.findById(id);
    return response;
  } catch (err) {
    throw err;
  }
};