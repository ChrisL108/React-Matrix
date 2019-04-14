import React, { useContext, useState } from 'react';
import { ProviderPropsContext } from '../Data/ContextStore';
import { FormGroup, Input, TextField, Select } from '@material-ui/core';

function GeneralPage() {
    const { providerProps, setProviderProps } = useContext(
        ProviderPropsContext
    );
    const [currentIssue, setCurrentIssue] = useState(
        providerProps.currentIssue
    );

    return (
        <>
            <FormGroup>
                {/* <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple">Name</InputLabel>
                    <Select
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input id="select-multiple" />}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> */}
            </FormGroup>
            <p>{JSON.stringify(providerProps)}</p>
        </>
    );
}

export default GeneralPage;
