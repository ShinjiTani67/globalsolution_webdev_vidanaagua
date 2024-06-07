import React from 'react'
import Link from 'next/link'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const Login = () => {

  return(
    <>
    <Header></Header>
    <div className='login'>
      <div className="text"></div>
      <div>
          <h1>Login</h1>
          <div>
            <input type="email"/>
            <label htmlFor="">E-mail</label>
          </div>
          <div>
            <input type="psw"/>
            <label htmlFor="">Senha</label>
          </div>
          <div>
            <div>
              <input type="checkbox" name="" id=""/>
              <label htmlFor="Remember Me">Lembrar do login</label>
            </div>
            <button type="submit">Login</button>
            <div>
              <span>Novo por aqui? <Link href='/cadastro'>Crie uma conta</Link></span>
            </div>
          </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Login