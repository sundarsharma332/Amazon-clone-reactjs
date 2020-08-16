// setup a data layer 
// we need to track the basket and use the user information

import React, { createContext,useContext,useReducer, Children } from "react";

// this is a  data layer
export const StateContext = createContext();

// BUILD A PROVIDER

export const StateProvider = ({reducer , initialState , children}) => (
    <StateContext.Provider value={useReducer(reducer , initialState)}>
        {children}
    </StateContext.Provider>


);
export const useStateValue = () => useContext(StateContext);
 