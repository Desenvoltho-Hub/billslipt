import { despesaCreate, despesaPopulate } from "../services/despesaServices.js"


//====================================================================
// !<despesaSend>
//====================================================================
export const despesaSend = async (req, res) => {
    const {titulo, total} = req.body
    const id = req.params.id
    try {
        const response = await despesaCreate({titulo, total, id})
        res.status(201).json({message: 'Despesa criada com sucesso!', response})
    } catch(err) {
        res.status(400).json({message: err.message})
    }
}
//====================================================================
// !<despesaGet>
//====================================================================
export const despesaGet = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const response = await despesaPopulate({id})
        return res.status(200).json({message: "Despesa populada com sucesso", response})
    } catch(err){
        return res.status(400).json({message: err.message})
    }
}