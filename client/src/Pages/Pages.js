import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Pages
import Home from './Home';
import Stats from './Stats';
import History from './History';
import AddTransaction from './AddTransaction';

// Components
import AppBar from '../Components/AppBar';
import NavBar from '../Components/NavBar';
import AddBtn from '../Components/Add';

const Pages = () => {

    return (
        <Router>
            <AppBar />
            <AddBtn />

            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/activity" component={ History } />
                <Route exact path="/stats" component={ Stats } />

                <Route exact path="/add-transaction" component={ AddTransaction } />
            </Switch>

            <NavBar />
        </Router>
    )
} 

export default Pages;