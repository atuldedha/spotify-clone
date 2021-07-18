import React, {createContext, useContext, useReducer} from 'react'


//This is just preparation of DataLayer
export const DataLayerContext = createContext();

//Here initial state and reducer are being passed in index.js and children refers to what wrapped inside it
export const DataLayer = ({initialState, reducer, children}) => (

    <DataLayerContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext)

