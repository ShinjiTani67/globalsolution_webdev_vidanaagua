'use client'
import React from 'react'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import LoginForm from '@/app/components/LoginForm';
import axios from 'axios';

export async function loginUsuario(credenciais: any) {
  try {
    const response = await axios.post(`${BASE_URL}/usuarios/login`, credenciais);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao fazer login: ' + error.message);
  }
}

const Login = () => {

  return(
    <>
    <Header></Header>
    <div className='login'>
      <LoginForm></LoginForm>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Login