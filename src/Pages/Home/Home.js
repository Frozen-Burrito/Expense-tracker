import React from 'react';

const Home = () => {
    return (
        <div className="center w-90 full-page">
            <p>Welcome back <span>SendNoobs</span></p>

            <div className="balance">
                <h3>Balance</h3>
                <h1>$132.9K</h1>
            </div>

            <div className="card split">
                <div className="card-half">
                    <h3>$200K</h3>
                    <p>Income</p>
                </div>

                <div className="card-half">
                    <h3>$50K</h3>
                    <p>Expenses</p>
                </div>
            </div>
        </div>
    )
}

export default Home;