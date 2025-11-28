import jwt from 'jsonwebtoken'
import { env } from '../config/index.js'

export const tokenGenerator = ({user}) => {
    try {
        const token = jwt.sign({ id: user._id}, env.JWT_SECRET, {expiresIn: "1d"})
        return token
    } catch(err) {
        throw err
    }
}