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
    <button className='buttonHome'><Link href='/mapa'>Mapa</Link></button>
    <button className='buttonHome'><Link href='/atualidades'>Atualidades</Link></button>
    <button className='buttonHome'><Link href='/membros'>Membros</Link></button>
    <Footer></Footer>
    </>
  )
}
