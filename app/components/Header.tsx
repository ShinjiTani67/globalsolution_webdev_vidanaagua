import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Ocean from '../../public/cycling_logo.png'

export function Header() {
  return (
    <div className='header'>
      <div className='headerRight'>
        <ul>
        <a href='/'><Image src={Ocean} width={50} height={50} alt='cycling'></Image></a>
        <p className='oceanQlin'>OceanQlin</p>
        </ul>
        </div>
      <nav className='headerLeft'>
        <ul>
        <li><a href="/pages/Atualidades">Atualidades</a></li>
        <li><a href="/pages/Mapas">Mapas</a></li>
        <li><a href="/pages/Membros">Membros</a></li>
        <li><button className='logoutButton'><a href="/pages/Login">Login</a></button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
