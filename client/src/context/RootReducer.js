export default ( state, action ) => {
    switch (action.type) {

        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.data
            }

        case 'SET_PAGE':
            return {
                ...state,
                activePage: action.newPage,
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.newTransaction]
            }

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.id)
            }

        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.data
            }

        default:
            return state;
    }
}