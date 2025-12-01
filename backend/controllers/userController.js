import { login } from "../services/auth.js";
import { register } from "../services/register.js";
import cookieParser from "cookie-parser";
import { userGet } from "../services/userServices.js";

//====================================================================
// !<userRegister>
//====================================================================
export const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
  if(!regexEmail.test(email)) {
    return res.status(400).json({message: 'Email inválido'})
  }
  try {
    const response = await register({ name, email, password });
    res
      .status(201)
      .cookie("authcookie", response.token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })
      .json({ message: "Usuário criado com sucesso!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//====================================================================
// !<userLogin>
//====================================================================
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await login({ email, password });
    res
      .status(200)
      .cookie("authcookie", response, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })
      .json({ message: "Usuário logado com sucesso!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//====================================================================
// !<userWho>
//====================================================================

export const userWho = async (req, res) => {
  const id = req.user.id;

  try {
    const response = await userGet(id);
  
    if (!response) return res.status(404).json({ message: "Usuário não encontrado" });
    res.status(200).json({ message: "Usuário encontrado com sucesso!", response });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}