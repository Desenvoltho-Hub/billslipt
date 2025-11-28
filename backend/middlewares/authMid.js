import jwt from "jsonwebtoken";
import { env } from "../config/index.js";

export const authVerify = (req, res, next) => {
  const token = req.cookies.authcookie;

  if (!token) {
    return res.status(401).json({ message: "Token ausente" });
  }

  jwt.verify(token, env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido ou expirado" });
    }

    req.user = user;
    next();
  });
};
