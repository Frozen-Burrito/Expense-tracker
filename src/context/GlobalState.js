import React, { createContext, useReducer } from 'react';

import RootReducer from './RootReducer';

const initState = {
    transactions: [
        // { id: 1, name: 'Book', category: 'Academic', amount: -15 },
        // { id: 2, name: 'Scolarship', category: 'Academic', amount: 220 },
        // { id: 3, name: 'Components', category: 'Hobby', amount: -7.59 },
        // { id: 4, name: 'Donuts', category: 'Food', amount: -4.99 },
        // { id: 5, name: 'Videogame', category: 'Entertainment', amount: -10.5 },
    ],
    activePage: 'Dashboard',
}

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(RootReducer, initState);

    const setActivePage = ( newPage ) => {
        dispatch({
            type: 'SET_PAGE',
            newPage,
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION', 
            newTransaction: transaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION', 
            id,
        })
    }

    return (
        <GlobalContext.Provider value={{ 
            transactions: state.transactions,
            activePage: state.activePage,
            setActivePage,
            addTransaction,
            deleteTransaction,
        }}>
            { children }
        </GlobalContext.Provider>
    )
}