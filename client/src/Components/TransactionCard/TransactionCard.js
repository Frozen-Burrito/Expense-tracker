import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

const TransactionCard = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        
        <div className="card column left">
            <div>
                <Link to={`/transaction/${transaction.id}`}><h4>{transaction.name}</h4></Link>
                <p className="category orange">{transaction.category}</p>
                <button className="btn-delete" onClick={() => deleteTransaction(transaction._id)}>Delete</button>
            </div>

            <div className="card-info">
                <h3>{sign}${Math.abs(transaction.amount)}</h3>
                <h3>03/10/2020</h3>
            </div>
        </div>
    
    )
}

export default TransactionCard;