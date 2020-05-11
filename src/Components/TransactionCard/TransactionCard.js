import React from 'react'
import { Link } from 'react-router-dom';

const TransactionCard = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <Link to={`/transaction/${transaction.id}`}>
            <div className="card column left">
                <h4>{transaction.name}</h4>
                <p className="category orange">{transaction.category}</p>

                <div className="card-info">
                    <h3>{sign}${Math.abs(transaction.amount)}</h3>
                    <h3>03/10/2020</h3>
                </div>
            </div>
        </Link>
    )
}

export default TransactionCard;