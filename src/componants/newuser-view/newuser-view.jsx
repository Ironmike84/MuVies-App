import React, { useState } from 'react';

export function NewUser(props) {
const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');
const [ Email, setEmail ] = useState('');
const [ Birthdate, setBirthdate ] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    props.onLoggedIn(username)

};

return (
    <div className='loginBox'>
    <form>
    <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    </label>
    <label>
        Password:
        <input autocomplete="text" type="password" value={password} onChange={e => setPassword(e.target.value)} />
    </label>
    <label>
        E-Mail:
        <input type="text" value={Email} onChange={e => setEmail(e.target.value)} />
    </label>
    <label>
        Birthdate:
        <input type="text" value={Birthdate} onChange={e => setBirthdate(e.target.value)} />
    </label>

    <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
);
}
