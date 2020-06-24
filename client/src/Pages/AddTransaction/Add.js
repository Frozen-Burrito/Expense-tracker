import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            name,
            category,
            amount: +amount,
        }

        addTransaction(newTransaction)

        let path = '/';
        history.push(path);
    }

    return (
        <div className="center w-90 scrollable">
        
            <form className="column">
                <input type="text" value={ name } onChange={(e) => setName(e.target.value)} placeholder="Transaction" />

                <input type="text" value={ category } onChange={(e) => setCategory(e.target.value)} placeholder="Category" />

                <input type="number" value={ amount } onChange={(e) => setAmount(e.target.value)} placeholder="$ Amount" />

                
                <button className="action-btn" onClick={handleSubmit}>Add</button>
            </form>

        </div>
    )
}

export default AddTransaction;