import React from 'react';

import './App.css';

// Context
import { GlobalProvider } from './context/GlobalState';

// App Tabs
import Pages from './Pages/Pages';

function App() {
    return (
        <GlobalProvider>
            <div className="App mobile-container">
                <Pages />
            </div>
        </GlobalProvider>
    );
}

export default App;
