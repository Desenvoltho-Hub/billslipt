import dotenv from 'dotenv'
dotenv.config()

export const env = {
    MGDB: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    ORIGIN: process.env.ORIGIN,
    PORT: process.env.PORT || 3000
}