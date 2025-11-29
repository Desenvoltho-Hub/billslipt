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
  });

  const handleChange = (e) => {
    dispatch({ type: "INPUT", name: e.target.name, value: e.target.value });
  };

  const despesaCreate = async (id) => {
    try {
      const response = await api.post(`/despesa/despesa/${id}`, {
        titulo: state.titulo,
        total: state.total,
      });
      alert("Despesas criadas com sucesso!");
      dispatch({ type: "DESPESAS", despesas: response.data.response });
    } catch (err) {
      alert("Não foi possível criar despesa");
      console.log(err);
    }
  };

  return (
    <DespesaContext.Provider value={{ state, handleChange, despesaCreate }}>
      {children}
    </DespesaContext.Provider>
  );
};
