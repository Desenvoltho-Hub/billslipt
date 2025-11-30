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
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    titulo: "",
    total: "",
    id: "",
    despesas: [],
    grupoSelecionado: ''
  });

  const handleChange = (e) => {
    dispatch({ type: "INPUT", name: e.target.name, value: e.target.value });
  };

  //====================================================================
  // !<despesaCreate>
  //====================================================================
  const despesaCreate = async () => {
    const id = state.grupoSelecionado
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

  return (
    <DespesaContext.Provider
      value={{ state, handleChange, despesaGrupo, despesaCreate }}
    >
      {children}
    </DespesaContext.Provider>
  );
};
