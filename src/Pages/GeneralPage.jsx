import React, { useContext } from 'react';
import { ProviderPropsContext } from '../Data/ContextStore';

function GeneralPage() {
    const [providerProps, setProviderProps] = useContext(ProviderPropsContext);

    return (
        <>
            <p>test</p>
        </>
    );
}

export default GeneralPage;
