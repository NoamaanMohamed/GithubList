import React, { useState } from 'react';


function SearchForm({ getResult }) {

    const [ username, setUsername ] = useState("")

    const handleSubmit = e => {
        getResult(username);
    }

    const updateInput = e => {
        const input = e.target.value 
        setUsername(input)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
                
            <input type="text" id="username" name= "username" value={username} onChange={updateInput} />
           
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
