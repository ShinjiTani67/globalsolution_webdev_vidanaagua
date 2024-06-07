"use client";
import {signIn} from "next-auth/react"

import React, { FormEvent } from 'react'

const LoginForm = () => {
    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formDate = new FormData(e.currentTarget)

        const data = {
            email : formDate.get("email"),
            password : formDate.get("password"),
        };

        signIn("credentials", {
            ...data,
            callbackUrl:'/dashboard',
        });
    }

  return (
    <div>
      <form onSubmit={login}>
        <h2>Faça o seu Login</h2>
        <input
        name='email'
        type='email'
        placeholder='Email'
        className='inputEmail'/>
        <input
        name='password'
        type='password'
        placeholder='Senha'
        className='inputSenha'/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
