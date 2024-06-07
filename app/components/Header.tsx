import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <div className='header'>
      <div className='headerRight'>
        <ul>
        <Link href='/'><Image src='/app/assets/cycling_logo.png' width={50} height={50} alt='cycling'></Image></Link>
        <p className='oceanQlin'>OcenQlin</p>
        </ul>
        </div>
      <nav className='headerLeft'>
        <ul>
        <li><Link href="/atualidades">Atualidades</Link></li>
        <li><Link href="/mapas">Mapas</Link></li>
        <li><Link href="/pages/membros">Membros</Link></li>
        <li><button className='logoutButton'><Link href='/login'>Login</Link></button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
