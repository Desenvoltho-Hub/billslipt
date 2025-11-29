import { useReducer } from "react";
import { createContext } from "react";
import { api } from "../api/api.js";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT": {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    name: null,
    email: null,
    password: null,
    success: false,
    fail: false
  });
  const handleChange = (e) => {
    dispatch({
      type: "INPUT",
      name: e.target.name,
      value: e.target.value,
    });
  };
  //====================================================================
  // !<userRegister>
  //====================================================================
  const userRegister = async () => {
    try {
      const response = await api.post("/user/register", {
        name: state.name,
        email: state.email,
        password: state.password,
      });
      if(response) {
        state.success = true
      }
      console.log(state.name)
      
    } catch (err) {
      alert('Erro ao cadastrar usuário')
      if(err) {
        state.fail = true
      }
      console.log(state.fail)
      console.log(err);
    } finally {
      state.name = '',
      state.email = '',
      state.password = ''
    }
  };

  return (
    <AuthContext.Provider value={{ handleChange, userRegister, state }}>
      {children}
    </AuthContext.Provider>
  );
};
