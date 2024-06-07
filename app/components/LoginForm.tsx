"use client";
import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <form>
        <h2>Faça o seu Login</h2>
        <input
        type='email'
        placeholder='Email'
        className='inputEmail'/>
        <input
        type='passwors'
        placeholder='Senha'
        className='inputSenha'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
