import {auth} from './src/firebase_setup/firebase.js'

// Sign Up
export const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);

};

// Sign In
export const signIn = (email,password)=> {
    return auth.signInWithEmailAndPassword(email, password);
};

// Sign Out
export const signOut = () =>{
    return auth.signOut();
}

// Function to monitor Authentication State:
export const onAuthStateChange =(callback) => {
    return auth.onAuthStateChange(callback);
};

