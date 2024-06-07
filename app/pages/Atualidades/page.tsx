import React from 'react'
import Image from 'next/image'
const atualidades = () => {
  return (
    <div>
      <h1>Atualidades</h1>
      <p>noticias sobre reciclagem</p>
      <div><Image src='/public/noticias.jpg' width={500} height={500} alt='noticia'></Image></div>      
    </div>
  )
}

export default atualidades