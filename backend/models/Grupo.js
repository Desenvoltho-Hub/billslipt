import mongoose, { Schema } from "mongoose";
import User from "./User.js";

export const GrupoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  { timestamps: true }
);
export default  mongoose.model("Grupo", GrupoSchema);
