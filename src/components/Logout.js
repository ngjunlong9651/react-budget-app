import React from "react";
import {GoogleLogout} from 'react-google-login';

const clientID = "694510334834-f0k1jgmecuuebmhil5b5l830ec91lg1s.apps.googleusercontent.com"

function Logout(){
    const onSuccess = (res) =>{
        console.log("Logout Success");
    }

    return (
        <div id ="signOutButton">
            <GoogleLogout
                clientID = {clientID}
                buttonText = {"Login"}
                onLogoutSuccess = {onSuccess}
                />
        </div>
    )
}


export default Logout;