import express from 'express'
import cors from 'cors'
import { env } from './env.js'

export const createServer = () => {
    const app = express()
    app.use(cors({
        origin: env.ORIGIN,
        credentials: true
    }))
    app.use(express.json())
    return app
}