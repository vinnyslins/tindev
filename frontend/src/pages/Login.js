import React from 'react';

import './Login.css'

import logo from '../assets/logo.svg';

function Login() {
  return (
    <div className='login-container'>
      <form>
        <img src={logo} alt='tindev'/>
        <input placeholder='Digite seu usuário do GitHub'></input>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default Login;
