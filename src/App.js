import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import MasterForm from './MasterForm';

function App() {
    return (
        <>
            <div className="App">
                <h3>Security Matrix</h3>
                <MasterForm />
            </div>
        </>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
