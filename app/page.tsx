"use client";
import React from 'react'
import Header from './components/Header';
import Link from 'next/link'
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <Header></Header>
    <div className='imgHome'>OceanQlin</div>
    <section className='apresentacao'>
      <div>conheça um pouco do projeto</div>
      <p className="apresentacaoHome"></p>
    </section>
    <section className='botoes'>
    <button className='buttonHome'><Link href='/mapas'>Mapa</Link></button>
    <button className='buttonHome'><Link href='/atualidades'>Atualidades</Link></button>
    <button className='buttonHome'><Link href='/membros'>Membros</Link></button>
    </section>
    <Footer></Footer>
    </>
  )
}
