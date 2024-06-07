"use client";
import React from 'react'
import Header from './components/Header';
import Link from 'next/link'
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <Header></Header>
    <img className='imgHome' src="/ocean_pic2.jpg"></img>
    <section className='apresentacao'>
      <div>conheça um pouco do projeto</div>
      <p className="apresentacaoHome"></p>
    </section>
    <button><Link href='/mapa'>Mapa</Link></button>
    <button><Link href='/atualidades'>Atualidades</Link></button>
    <button><Link href='/membros'></Link></button>
    <Footer></Footer>
    </>
  )
}
