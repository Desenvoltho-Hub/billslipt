import { createContext, useReducer } from "react";
import { api } from "../api/api";

export const GrupoContext = createContext();

export const GrupoProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT": {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
      case "LIMPAR_INPUT": {
        return {
            ...state,
            name: action.name,
            description: action.description
        }
      }
      case "FAIL": {
        return {
            ...state,
            fail: action.fail
        }
      }
      case "GRUPOS": {
        return {
            ...state,
            grupos: action.grupos
        }
      }
      case "IS_LOADING": {
        return {
            ...state,
            loading: action.loading
        }
      }
      default:
        return state
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    description: "",
    fail: false,
    grupos: [],
    loading: false
  });
  const handleChange = (e) => {
    dispatch({
      type: "INPUT",
      name: e.target.name,
      value: e.target.value,
    });
};
    //====================================================================
    // !<grupoRegister>
    //====================================================================
    const grupoRegister = async () => {
      try {
        await api.post("/grupo/register", {
          name: state.name,
          description: state.description,
        });
        dispatch({
            type: "FAIL",
            fail: false
        })
      } catch (err) {
        console.log(err.message);
        dispatch({
            type: "FAIL",
            fail: true
        })
      } finally {
        dispatch({
            type: "LIMPAR_INPUT",
            name: '',
            description: ''
        })
      }
    }
    //====================================================================
    // !<grupoFind>
    //====================================================================
    const grupoFind = async () => {
        try {
             dispatch({
                type: "IS_LOADING",
                loading: true
            })
            const grupos = await api.get("/grupo/grupos")
            dispatch({
                type: "GRUPOS",
                grupos: grupos.data.response
            })
        } catch(err) {
            console.log(err)
        } finally{
              dispatch({
                type: "IS_LOADING",
                loading: false
            })
        }
    }
  return (
    <GrupoContext.Provider value={{ grupoRegister, handleChange, state, grupoFind }}>
      {children}
    </GrupoContext.Provider>
  );
};
