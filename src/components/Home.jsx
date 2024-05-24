import React from 'react'
import Footer from "../components/Footer";
import homeSvg from '../assets/homeSvg.svg'
import './styles/HomeStyle.css'

export default function Home() {
  return (
    <div className='home'>
      <h1 className='text-7xl text-center text-blue-300'>hello</h1>
      <img className='homeSvg'src={homeSvg}/>
      <button className='btn'>حالة طارىء<i class="fa-solid fa-arrow-right"></i></button>
      <Footer/>
    </div>
  )
}
