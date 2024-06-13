import React from 'react'
import { BrowserRouter, Link, Route,  Routes } from 'react-router-dom';
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import homeSvg from '../assets/homeSvg.svg'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Services from './pages/Services';




export default function Home() {
  return (
    <div className='home'>
     
      <img className='homeSvg'src={homeSvg}/>
      <Link to={'/emergency'}>
      <Button  variant="contained" color="error" startIcon={<ArrowForwardIcon/>}>
         حالة طارئة 
      </Button>
      
      </Link>
<<<<<<< HEAD
      <Cards className='transition-opacity'/>
      <Footer/>
=======
      <Cards/>
   
>>>>>>> origin/main
    </div>
  )
}
