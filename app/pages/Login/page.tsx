'use client'
import React from 'react'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import LoginForm from '@/app/components/LoginForm';

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