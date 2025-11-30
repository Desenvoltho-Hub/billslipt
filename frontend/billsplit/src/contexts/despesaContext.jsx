import { createContext, useReducer } from "react";
import { api } from "../api/api";


export const DespesaContext = createContext();

export const DespesaProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return { ...state, [action.name]: action.value };
      case "DESPESAS":
        return { ...state, despesas: action.despesas };
      case "SET_GRUPO": {
        return { ...state, grupo: action.grupo};
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    titulo: "",
    total: "",
    id: "",
    despesas: [],
    grupoSelecionado: "",
    grupo: []
  });

  const handleChange = (eOrObj) => {
    if (eOrObj.target) {
      dispatch({
        type: "INPUT",
        name: eOrObj.target.name,
        value: eOrObj.target.value,
      });
    } else {
      dispatch({ type: "INPUT", name: eOrObj.name, value: eOrObj.value });
    }
  };

  //====================================================================
  // !<despesaCreate>
  //====================================================================
  const despesaCreate = async () => {
    const id = state.grupoSelecionado;
    try {
      const response = await api.post(`/despesa/despesa/${id}`, {
        titulo: state.titulo,
        total: state.total,
      });

      alert("Despesas criadas com sucesso!");

      dispatch({
        type: "DESPESAS",
        despesas: response.data.response,
      });
    } catch (err) {
      alert("Não foi possível criar despesa");
      console.log(err);
    }
  };

  //====================================================================
  // !<despesaGrupo>
  //====================================================================
  const despesaGrupo = async (id) => {
    try {
      const response = await api.get(`/despesa/grupo/${id}`);

      dispatch({
        type: "DESPESAS",
        despesas: response.data.response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //====================================================================
  // !<despesaGrupoSelecionado>
  //====================================================================
const despesaGrupoSelecionado = async () => {
  const id = state.grupoSelecionado
  try {
    const response = await api.get(`/grupo/grupo/${id}`)
    dispatch({
      type: "SET_GRUPO",
      grupo: response.data.response
    })
  } catch (err) {
    console.log(err)
  }
}
  return (
    <DespesaContext.Provider
      value={{ state, handleChange, despesaGrupoSelecionado, despesaGrupo, despesaCreate }}
    >
      {children}
    </DespesaContext.Provider>
  );
};
