import React from 'react'
import homeSvg from '../assets/homeSvg.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './styles/HomeStyle.css'

export default function Home() {
  return (
    <div className='home'>
      <img className='homeSvg'src={homeSvg}/>
      <button className='btn'>حالة طارىء<i class="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}
