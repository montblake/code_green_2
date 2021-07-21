import React from 'react';
import Login from '../components/Login';

const Auth = (props) => {

    return <Login handleLogin={props.handleLogin}/>;

}

export default Auth;