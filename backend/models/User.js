import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 6
    }
}, {timestamps: true})
export default mongoose.model('User', UserSchema )