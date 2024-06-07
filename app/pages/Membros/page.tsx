import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
const  membros = () => {
  return (
    <div className='membros'>
      <Header></Header>
        <nav className='membrosLista'>
            <ul>
                <li>Fernando Tanigushi RM553587</li>
                <li>Guilherme Gambarão RM554258</li>
                <li>João Vitor Valaitis RM553972</li>
            </ul>
        </nav> 
        <Footer></Footer>
    </div>

  )
}

export default membros
