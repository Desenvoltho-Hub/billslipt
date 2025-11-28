import mongoose from 'mongoose'
import { env } from './env.js'

export const connectDB = async () => {
    try {
        await mongoose.connect(env.MGDB)
        console.log('Conectado ao MONGODB')
    } catch(err) {
        console.log('Erro ao se conectar ao banco de dados!')
    }
}