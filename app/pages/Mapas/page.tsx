import React from 'react'
import Image from 'next/image'

const mapas = () => {
  return (
    <div>
      <h1>Aonde estão os incineradores</h1>
      <p>//pesquisa pelo CEP</p>
      <Image
      src="/mapa_.png"
      width={500}
      height={500}
      alt="mapa"
    />
    </div>
  )
}

export default mapas