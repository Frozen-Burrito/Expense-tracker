import React, { useState } from 'react';

const AddTransaction = () => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <>
        
            <form>
                <input type="text" value={ name } onChange={(e) => setName(e.target.value)} placeholder="Transaction" />

                <input type="number" value={ amount } onChange={(e) => setAmount(e.target.value)} placeholder="$ Amount" />

                <button className="action-btn">Add</button>
            </form>

        </>
    )
}

export default AddTransaction;