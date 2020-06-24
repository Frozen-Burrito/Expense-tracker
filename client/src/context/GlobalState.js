import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import RootReducer from './RootReducer';

const initState = {
    transactions: [],
    error: null,
    loading: true,

    activePage: 'Dashboard',
}

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(RootReducer, initState);

    async function getTransactions() {

        try {
            const response = await axios.get('/api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                data: response.data.data,
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                data: error.response.data.error,
            });
        }
    }

    const setActivePage = ( newPage ) => {
        dispatch({
            type: 'SET_PAGE',
            newPage,
        });
    }

    async function addTransaction (transaction) {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await axios.post('/api/v1/transactions/', transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION', 
                newTransaction: response.data.data,
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                data: error.response.data.error,
            });
        }
        
    }

    async function deleteTransaction (id) {

        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: 'DELETE_TRANSACTION', 
                id,
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                data: error.response.data.error,
            });
        }
    }

    return (
        <GlobalContext.Provider value={{ 
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
        
            activePage: state.activePage,
            setActivePage,

            getTransactions,
            addTransaction,
            deleteTransaction,
        }}>
            { children }
        </GlobalContext.Provider>
    )
}