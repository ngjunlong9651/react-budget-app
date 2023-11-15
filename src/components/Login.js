import React from "react";
import {GoogleLogin} from 'react-google-login';

const clientID = "694510334834-f0k1jgmecuuebmhil5b5l830ec91lg1s.apps.googleusercontent.com"

function Login(){
    const onSuccess = (res) =>{
        console.log("Login Success. Current User: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log('Login Failure: ', res);
    }

    return (
        <div id ="signInButton">
            <GoogleLogin
                clientID = {clientID}
                buttonText = "Login"
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
                />
        </div>
    )
}

export default Login