import { useContext, useReducer } from "react";
import React from 'react';



//////////////////////////////////////
// Initial  State
//////////////////////////////////////

const initialState = {
    url: "http://localhost:3000",
    token: null,
    name: null
}



//////////////////////////////////////
// REDUCER
//////////////////////////////////////
// action = {type: "", payload: ---}
const reducer = (state, action) => {

    switch(action.type){
        default:
            return state
    }

}


//////////////////////////////////////
// AppContext
//////////////////////////////////////
const AppContext = React.createContext(null);

export const AppState = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={ state, dispatch }>
            {props.children}
        </AppContext.Provider>
}

//////////////////////////////////////
// useAppState Hook
//////////////////////////////////////

export const useAppState = () => {
    return React.useContext(AppContext)
}

