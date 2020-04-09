import React from 'react';
import firebase from '../utils/firebase';
export class LoginWithGmail extends React.Component{
    constructor(){
        super();
    }
    doLogin(){
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider).then(user=>{
            console.log('User After Sign In ::::::: ',user);
        });
    }
    doLogout(){
        firebase.auth().signOut();
    }
    render(){
        return (
            <div>
                <h1>Login with Gmail Example</h1>
                <button onClick={this.doLogin.bind(this)}>Gmail Login</button>
                <button onClick={this.doLogout.bind(this)}>Logout</button>
            </div>
        )
    }
}