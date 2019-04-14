import React, { createContext, useState } from 'react';
import { providerProps as provProps } from './providerProps';
import { firewallProps as fwProps } from './PropertyGroups/firewallProps';

export const ProviderPropsContext = createContext();
export const FirewallPropsContext = createContext();

export default function ContextStore({ children }) {
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
                    {children}
                </FirewallPropsContext.Provider>
            </ProviderPropsContext.Provider>
        </>
    );
}
