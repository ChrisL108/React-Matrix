import React, { useContext } from 'react';
import { FirewallPropsContext } from '../Data/ContextStore';

function FirewallPage() {
    const { firewallProps, setfirewallProps } = useContext(
        FirewallPropsContext
    );

    return (
        <>
            <h3>Firewall Section</h3>
            <p>{JSON.stringify(firewallProps)}</p>
        </>
    );
}

export default FirewallPage;
