import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DoneEmrgencey from './components/DoneEmrgencey'
import Home from './components/Home'
import Services from './components/pages/Services'
import Team from "./components/pages/Team";
import DailyCare from './components/pages/DailyCare'
import Emergency from './components/Emergency'
import Footer from './components/Footer'
export default function AppRutes() {
  return (
    <div>
   
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/dailycare" element={<DailyCare/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path="/emergency" element={<Emergency/>}/>
        <Route path='/doneEmergency' element={<DoneEmrgencey/>}/>
      </Routes>
      <Footer/>
     
    </div>
  )
}
