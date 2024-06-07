import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerRight'>
        <ul>
        <Image src="/cycling_logo.png" width={500} height={500} alt="cycling"/>
        <p className='oceanQlin'>OcenQlin</p>
        </ul>
        </div>
      <nav className='headerLeft'>
        <ul>
        <li><Link href="/atualidades">Atualidades</Link></li>
        <li><Link href="/mapas">Mapas</Link></li>
        <li><Link href="/pages/membros">Membros</Link></li>
        <li><button className='logoutButton'><Link href='/pages/login'>Login</Link></button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
