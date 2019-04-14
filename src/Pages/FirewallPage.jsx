import React, { useState } from 'react';
// import ProviderPropsContext from '../App';
import { firewallProps } from '../Data/PropertyGroups/firewallProps';

export default function GeneralPage() {
    const [providerProps, setProviderProps] = useState({ ...firewallProps });

    return (
        <>
            <h3>Firewall Section</h3>
        </>
    );
}
