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
        return { ...state, grupo: action.grupo };
      }
      case "DESPESA_SELECIONADA": {
        return {
          ...state,
          despesaSelecionada: action.despesaSelecionada,
        };
      }
      case "PARTICIPANTES": {
        return {
          ...state,
          participantes: action.participantes
        }
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
    grupo: [],
    despesaSelecionada: "",
    participantes: []
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
    const id = state.grupoSelecionado;
    try {
      const response = await api.get(`/grupo/grupo/${id}`);
      dispatch({
        type: "SET_GRUPO",
        grupo: response.data.response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //====================================================================
  // !<despesaSelecionada>
  //====================================================================
  const despesaSelecionada = (id) => {
    dispatch({
      type: "DESPESA_SELECIONADA",
      despesaSelecionada: id,
    });
  };
  //====================================================================
  // !<despesaParticipantes>
  //====================================================================
const participantes = (id) => {
  const jaSelecionado = state.participantes.includes(id);
  const novosParticipantes = jaSelecionado
    ? state.participantes.filter((pid) => pid !== id) 
    : [...state.participantes, id]; 

  dispatch({
    type: "PARTICIPANTES",
    participantes: novosParticipantes,
  });
  
};
  //====================================================================
  // !<despesaAddParticipantes>
  //====================================================================
const despesaAddParticipantes = async () => {
  const id = state.despesaSelecionada;
  if (!id) return alert("Selecione uma despesa primeiro!");
  if (!state.participantes.length) return alert("Selecione pelo menos um participante!");
  if (!state.grupo?.members?.length) return alert("Grupo não carregado!");

  const membrosPayload = state.grupo.members
    .filter(m => state.participantes.includes(m._id))
    .map(m => ({
      memberId: m._id,
      name: m.name,
      amount: 0
    }));

  if (!membrosPayload.length) return alert("Nenhum participante válido selecionado!");

  try {
    const response = await api.put(`/despesa/adicionar/${id}`, { membros: membrosPayload });

    console.log("Resposta backend:", response.data);

    const updatedDespesas = Array.isArray(response.data.response)
      ? response.data.response
      : [response.data.response];

    dispatch({
      type: "DESPESAS",
      despesas: updatedDespesas
    });

    alert("Participantes adicionados com sucesso!");
  } catch (err) {
    console.log("Erro ao adicionar participantes:", err);
    alert("Não foi possível adicionar participantes");
  }
};





  return (
    <DespesaContext.Provider
      value={{
        state,
        handleChange,
        despesaGrupoSelecionado,
        despesaGrupo,
        despesaCreate,
        despesaSelecionada,
        participantes,
        despesaAddParticipantes
      }}
    >
      {children}
    </DespesaContext.Provider>
  );
};
