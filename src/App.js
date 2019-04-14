import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import MasterForm from './MasterForm';
// import Store from "./Store";
import { providerProps as provProps } from './Data/providerProps';
import { firewallProps as fwProps } from './Data/PropertyGroups/firewallProps';

import './styles.css';
export const ProviderPropsContext = createContext();
export const FirewallPropsContext = createContext();

function App() {
    const [providerProps, setProviderProps] = useState({ ...provProps });
    const [firewallProps, setFirewallProps] = useState({ ...fwProps });
    return (
        <>
            <ProviderPropsContext.Provider
                value={{ providerProps, setProviderProps }}
            >
                <FirewallPropsContext.Provider
                    value={{ firewallProps, setFirewallProps }}
                >
                    <div className="App">
                        <h3>Security Matrix</h3>
                        <MasterForm />
                    </div>
                </FirewallPropsContext.Provider>
            </ProviderPropsContext.Provider>
        </>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
