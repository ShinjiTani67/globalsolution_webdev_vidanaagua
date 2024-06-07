import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerRight'><Link href='/'><img src='/app/assets/cycling_logo.png'></img></Link></div>
      <nav className='headerLeft'>
        <ul>
        <li><Link href="/atualidades">Atualidades</Link></li>
        <li><Link href="/mapas">Mapas</Link></li>
        <li></li>
        <li><Link href="/membros">Membros</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
