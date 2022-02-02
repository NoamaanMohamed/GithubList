import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';

function SearchForm({ getResult }) {

    const [ username, setUsername ] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        getResult(username);
    }

    const updateInput = e => {
        const input = e.target.value 
        setUsername(input)
    }


    return (
        <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="username">username</FormLabel>
                
            <TextField type="text" id="username" name= "username" value={username} onChange={updateInput} />
           
            <Button  variant="contained" type="submit" value="Submit" >Search</Button>
        </form>
    );
};

export default SearchForm;
