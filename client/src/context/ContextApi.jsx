import React, { createContext, useContext, useReducer } from "react";
import { Products, cards } from "../constants/Products";
import Reducer from "./Reducer";

const prodContext = createContext();

const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    prod: Products,
    card: cards,
    cart: [],
  });
  return (
    <prodContext.Provider value={{ state, dispatch }}>
      {children}
    </prodContext.Provider>
  );
};

export default ContextApi;

export const ProdState = () => {
  return useContext(prodContext);
};
