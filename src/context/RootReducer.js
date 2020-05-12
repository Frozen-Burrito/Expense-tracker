export default ( state, action ) => {
    switch (action.type) {

        case 'SET_PAGE':
            return {
                ...state,
                activePage: action.newPage,
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.newTransaction, ...state.transactions]
            }

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.id)
            }

        default:
            return state;
    }
}