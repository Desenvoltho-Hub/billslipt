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
      case "ALERT_SUCCESS": {
        return {
          ...state,
          success: action.success,
          fail: action.fail,
        };
      }
      case "ALERT_FAIL": {
        return {
          ...state,
          fail: action.fail,
          success: action.success
        }
      }
      case "LIMPAR_INPUT": {
        return {
          ...state,
          name: action.name,
          email: action.email,
          password: action.password,
        };
      }
      case "FAIL_LOGIN": {
        return {
          ...state,
          failLogin: action.failLogin,
          errorMessage: action.errorMessage
        }
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
    success: false,
    fail: false,
    failLogin: false,
    errorMessage: ''
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
      if (response.status === 201) {
        dispatch({
          type: "ALERT_SUCCESS",
          success: true,
          fail: false,
        });
      }
    } catch (err) {
      dispatch({
        type: "ALERT_FAIL",
        fail: true,
        success: false
      })
      console.log(err.response)
    } finally {
      dispatch({
        type: "LIMPAR_INPUT",
        name: "",
        email: "",
        password: "",
      });
    }
  };
  //====================================================================
  // !<userLogin>
  //====================================================================
const userLogin = async () => {
  try {
    const response = await api.post("/user/login", {
      email: state.email,
      password: state.password
    })
    alert('LOGADO COM SUCESSO')
    dispatch({
      type: "FAIL_LOGIN",
      failLogin: false,
      errorMessage: null
    })

  } catch(err) {
    dispatch({
      type: "FAIL_LOGIN",
      failLogin: true,
      errorMessage: err
    })
  } finally {
    dispatch({
        type: "LIMPAR_INPUT",
        name: "",
        email: "",
        password: "",
      });
  }
}
  return (
    <AuthContext.Provider value={{ handleChange, userRegister, userLogin, state }}>
      {children}
    </AuthContext.Provider>
  );
};
