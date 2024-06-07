"use client";
import React from 'react'
import Header from './components/Header';
import Link from 'next/link'
import Footer from './components/Footer';
import Image from 'next/image';


export default function Home() {
  return (
    <>
    <Header></Header>
    <Image src="/ocean_pic2.jpg" width={1000} height={800} alt='oceano'></Image>
    <section className='apresentacao'>
      <h2>O projeto da OceanQlin</h2>
      <p className="apresentacaoHome">A OceanQlin planeja fazer um sistema que entregue pessoas e empresas a incineradores para poder queimar resíduos, 
      que ser despejados de maneira indevida, e transformar o produto desta queima em objetos como tijolos.  
O sistema proposto pela OceanQlin é baseado no sistema de reciclagem de Singapura 
O objetivo da OceanQlin é diminuir a quantidade de lixo que despejado pelo meio ambiente e transformá-lo em algo que seja útil de novo a sociedade  </p>
    </section>
    <section className='botoes'>
    <button className='buttonHome'><a href='/pages/Mapas'>Mapa</a></button>
    <button className='buttonHome'><a href='/pages/Atualidades'>Atualidades</a></button>
    <button className='buttonHome'><a href='/pages/Membros'>Membros</a></button>
    <button className='buttonHome'><a href='/pages/Cadastro'>Cadastro</a></button>
    </section>
    <Footer></Footer>
    </>
  )
}
