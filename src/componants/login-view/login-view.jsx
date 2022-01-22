import React, { useState } from 'react';
import './login-view.scss';
import NewUser from '../newuser-view/newuser-view'

export function LoginView(props) {
const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username)

};
const GetNewUser = (e) => {
    e.preventDefault();
    props.NewUser(NewUser)

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
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
    </label>
    <button type="submit" onClick={handleSubmit}>Submit</button>
    <button type='submit' onClick={GetNewUser}>New User</button>
    </form>
    </div>
);
}


