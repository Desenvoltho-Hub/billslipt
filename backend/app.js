import cookieParser from "cookie-parser";
import { env, connectDB, createServer } from "./config/index.js";
import userRoute from "./routes/userRoute.js";
import grupoRoute from "./routes/gruposRoute.js";
import despesaRoute from "./routes/despesaRoute.js";
const app = createServer();
app.use(cookieParser());
connectDB();

app.listen(env.PORT, () => {
  console.log(`Servidor rodando na porta ${env.PORT}`);
});
app.use("/user", userRoute);
app.use("/grupo", grupoRoute);
app.use("/despesa", despesaRoute)
