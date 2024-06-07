import React from 'react'
import Image from 'next/image'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

const mapas = () => {
  return (
    <div>
      <Header></Header>
      <h1>Aonde estão os incineradores</h1>
      <p>//pesquisa pelo CEP</p>
      <Image
      src="/mapa_.png"
      width={500}
      height={500}
      alt="mapa"
    />
    <Footer></Footer>
    </div>
  )
}

export default mapas