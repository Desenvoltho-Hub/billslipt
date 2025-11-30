import mongoose, { Schema } from "mongoose";

export const DespesaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    grupoId: {
        type: Schema.Types.ObjectId,
        ref: "Grupo"
    },
    pagoPor: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
   participantes: [
  {
    memberId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    amount: {
      type: Number,
      required: true
    }
  }
]


}, {timestamps: true})
export default mongoose.model('Despesa', DespesaSchema)