import React from 'react';
import Login from '../components/Login';

const Auth = (props) => {

    return (
        <>
            <Login handleSubmit={props.handleSubmit}/>
        </>
    )
}

export default Auth;