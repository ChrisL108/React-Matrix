import React, { useState, useEffect, useContext } from 'react';
//context objects
import ContextStore from './Data/ContextStore';
//material ui
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//pages
import GeneralPage from './Pages/GeneralPage';
import FirewallPage from './Pages/FirewallPage';
import UserInfoPage from './Pages/UserInfoPage';

import './styles.css';

function MasterForm() {
    return (
        <>
            <ContextStore>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper>
                            <GeneralPage />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <FirewallPage />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <Paper> */}
                        <UserInfoPage />
                        {/* </Paper> */}
                    </Grid>
                </Grid>
                {/* <GeneralPage />
                <br />
                <FirewallPage />
                <br />
                <UserInfoPage />
                <br />
                <br />
                <br /> */}
                {/* Submit */}
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </ContextStore>
        </>
    );
}

export default MasterForm;
