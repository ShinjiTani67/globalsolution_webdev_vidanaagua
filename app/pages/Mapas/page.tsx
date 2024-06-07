import React from 'react'
import Image from 'next/image'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:8080/incineradores/cep');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    return null;
  }
}

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