import { createContext, useReducer } from "react";
import { api } from "../api/api";

export const DespesaContext = createContext
export const DespesaProvider = ({children}) => {
    const reducer = (state, action) => {
        switch(action.type) {
            case "INPUT": {
                return {
                    ...state,
                    [action.name]: action.value
                }
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        titulo: '',
        total: '',
        id: ''
    })
    //====================================================================
    // !<despesaCreate>
    //====================================================================   
const despesaCreate = async (id) => {
    try {
        const response = await api.post(`/despesa/despesa/${id}`{
            titulo: state.titulo,
            total: state.total
        })
    } catch(err) {
        console.log(err)
    }
}
    
}    
    

