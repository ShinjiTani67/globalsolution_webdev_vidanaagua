'use client'
import React from 'react'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import LoginForm from '@/app/components/LoginForm';
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:8080/usuarios/login');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    return null;
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