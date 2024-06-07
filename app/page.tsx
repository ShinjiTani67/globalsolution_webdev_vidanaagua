"use client";
import React from 'react'
import Header from './components/Header';
import ocean_pic2 from './assets/ocean_pic2.jpg'
export default function Home() {
  return (
    <>
    <Header></Header>
    <img className='imgHome' src={ocean_pic2}></img>
    <section className='apresentacao'>
    <div>conheça um pouco do projeto</div>
    </section>
    </>
  )
}
