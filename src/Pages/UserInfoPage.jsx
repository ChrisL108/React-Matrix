import React, { useState, useEffect } from 'react';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import { FormGroup, TextField, InputLabel, Input } from '@material-ui/core';

export default function UserInfoPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(`
          Username is ${username}\n
          Password Set? ${password.length > 0}
        `);
    });

    return (
        <>
            <FormGroup>
                <TextField
                    id="username"
                    label="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    margin="normal"
                    variant="filled"
                />

                <TextField
                    id="password"
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    margin="normal"
                    variant="filled"
                    type="password"
                />
            </FormGroup>
        </>
    );
}
