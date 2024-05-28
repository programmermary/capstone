import React from 'react'
import homePage from '../assets/homepage.png'
import user from '../assets/user.png'
import brightness from '../assets/brightness.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='  bg-slate-100 w-screen h-20 flex  justify-between'>
        <img className='h-10  ml-6 mt-5 'src={user}/>
        <Link to={'/'}>
        <img className='h-10 mt-5 'src={homePage}/>
        </Link>
        <img className='h-10 mr-6 mt-5 'src={brightness}/>
    </div>
  )
}
