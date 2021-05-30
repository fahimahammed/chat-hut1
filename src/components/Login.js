import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../app/firebase';
import '../styles/Login.css';

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div>
        <img
          src="https://images.vexels.com/media/users/3/139911/isolated/preview/1afb4038427b2bd8edd275940aea269d-chat-service-icon-by-vexels.png"
          alt=""
        />
        <div className="app-title">
          <h3 className='app-name-style'>Welcome to</h3>
          <h1>Chat <span className='app-name-style'>Hut</span></h1>
        </div>
      </div>

      <Button variant="outlined" className='button-style' onClick={signIn}>Sign In with Google</Button>
    </div>
  );
}

export default Login;