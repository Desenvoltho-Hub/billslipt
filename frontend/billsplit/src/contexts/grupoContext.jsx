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
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    description: "",
    fail: false,
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
  return (
    <GrupoContext.Provider value={{ grupoRegister, handleChange, state }}>
      {children}
    </GrupoContext.Provider>
  );
};
