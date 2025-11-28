import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Credenciais inválidas");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Credenciais inválidas");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Credenciais inválidas");
  }

  const token = jwt.sign(
    { id: user._id },
    env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
};
