import cookieParser from "cookie-parser"
import {env, connectDB, createServer} from "./config/index.js"
import userRoute from "./routes/userRoute.js"
const app = createServer()
app.use(cookieParser())
connectDB()

app.listen(env.PORT, () => {
    console.log(`Servidor rodando na porta ${env.PORT}`)
})
app.use('/user', userRoute)