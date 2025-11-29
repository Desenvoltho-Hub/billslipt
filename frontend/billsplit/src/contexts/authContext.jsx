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
     const response = await api.post(
  "/user/register",
  {
    name: state.name,
    email: state.email,
    password: state.password,
  },
  { headers: { "Content-Type": "application/json" } }
);
      alert('Cadastro realizado com sucesso, parabéns jovem!')
    } catch (err) {
      console.log(err.response ? err.response.data : err)
      }
    } 
    
  

  return (
    <AuthContext.Provider value={{ handleChange, userRegister, state }}>
      {children}
    </AuthContext.Provider>
  );
};
