import React, { useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import GeneralPage from './Pages/GeneralPage';
import FirewallPage from './Pages/FirewallPage';
import UserInfoPage from './Pages/UserInfoPage';

function MasterForm() {
    return (
        <>
            {/* <SimpleSelect /> */}
            <GeneralPage />
            <br />
            <FirewallPage />
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
