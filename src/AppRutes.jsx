import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DoneEmrgencey from './components/DoneEmrgencey'
import Home from './components/Home'
import Services from './components/pages/Services'
import DailyCare from './components/pages/DailyCare'
import Emergency from './components/Emergency'
export default function AppRutes() {
  return (
    <div>
   
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/dailycare" element={<DailyCare/>}/>
        <Route path="/emergency" element={<Emergency/>}/>
        <Route path='/doneEmergency' element={<DoneEmrgencey/>}/>
      </Routes>
     
    </div>
  )
}
