import { login } from "../services/auth.js";
import { register } from "../services/register.js";
import cookieParser from "cookie-parser";

//====================================================================
// !<userRegister>
//====================================================================
export const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
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
