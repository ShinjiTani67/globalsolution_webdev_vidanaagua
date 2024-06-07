import React from 'react'
import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
const atualidades = () => {
  return (
    <div>
      <Header></Header>
      <h1>Atualidades</h1>
      <p>noticias sobre reciclagem</p>
      <div><Image src='/noticias.jpg' width={500} height={500} alt='noticia'></Image></div>
      <Footer></Footer>      
    </div>
  )
}

export default atualidades