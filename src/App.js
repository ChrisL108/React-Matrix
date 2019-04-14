import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import MasterForm from './MasterForm';
import ContextStore from './Data/ContextStore';
import './styles.css';

function App() {
    return (
        <>
            <ContextStore>
                <div className="App">
                    <h3>Security Matrix</h3>
                    <MasterForm />
                </div>
            </ContextStore>
        </>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
