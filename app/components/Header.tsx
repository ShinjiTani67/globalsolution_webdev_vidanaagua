import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
    <div className='header'>
      <div className='headerRight'><Link href='/'></Link></div>
      <nav className='headerLeft'>
        <ul>
        <li><Link href="/atualidades">Atualidades</Link></li>
        <li><Link href="/mapas">mapas</Link></li>
        <li></li>
        <li><Link href="/membros">Membros</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default header
