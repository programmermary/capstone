import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import homeSvg from '../assets/homeSvg.svg'
import Services from './pages/Services';


export default function Home() {
  return (
    <div className='home'>
      <h1 className='text-center text-blue-300'>hello</h1>
      <img className='homeSvg'src={homeSvg}/>
      <button className='btn'>حالة طارىء<i class="fa-solid fa-arrow-right"></i></button>
      <Cards/>
      <Footer/>
    </div>
  )
}
