import React from 'react'
import homePage from '../assets/homepage.png'
import user from '../assets/user.png'
import brightness from '../assets/brightness.png'
export default function Footer() {
  return (
    <div className='border-transparent  bg-slate-100 w-screen h-20 flex  justify-between'>
        <img className='h-10  ml-6'src={user}/>
        <img className='h-10'src={homePage}/>
        <img className='h-10 mr-6'src={brightness}/>
    </div>
  )
}
