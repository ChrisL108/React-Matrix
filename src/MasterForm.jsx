import React, { useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import GeneralPage from './Pages/GeneralPage';
import UserInfoPage from './Pages/UserInfoPage';
// import ProviderProps from "./Data/providerProps";
import { ProviderPropsContext } from './App';

function MasterForm() {
    // const [providerProps, setProviderProps] = useContext(ProviderPropsContext);

    return (
        <>
            <GeneralPage />
            <br />
            <UserInfoPage />
            <br />
            <br />
            <br />
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </>
    );
}

export default MasterForm;
