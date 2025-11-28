import User from "../models/User.js";
import { hashPass } from "./hashPassword.js";
import { tokenGenerator } from "./tokenGenerator.js";


export const register = async ({ name, email, password }) => {
  if (!name) {
    throw new Error("O nome é obrigatório");
  }
  if (!email) {
    throw new Error("O email é obrigatório");
  }
  if (!password) {
    throw new Error("O password é obrigatório");
  }
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      throw new Error("Email já cadastrado");
    }
    const user = await User.create({
      name,
      email,
      password: await hashPass(password),
    });
    const token = tokenGenerator({user})

    return ({user, token});
  } catch (err) {
    throw err;
  }
};
