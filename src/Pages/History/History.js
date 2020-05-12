import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import TransactionCard from '../../Components/TransactionCard';

const HistoryPage = () => {

    const { transactions } = useContext(GlobalContext)

    return (
        <div className="center w-90 scrollable">

            <div className="transaction-list">
                { transactions.length ? transactions.map(transaction => (
                        <TransactionCard key={transaction.id} transaction={transaction} />
                    )) : (
                        <div className="center">
                            <h3>You have no transactions</h3>
                        </div>
                    )
                }
            </div>

            
        </div>
    )
}

export default HistoryPage;