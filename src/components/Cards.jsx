import React from 'react'
import r3aya from '../assets/r3aya.png'
import service from '../assets/service.png'
import ourserive from '../assets/ourserive.png'
import { Link } from 'react-router-dom'
export default function Cards() {
    return (
        <div className='  w-70 bg-black-100  mx-20 my-10  '>
           
            <Link to={'/services'}>
            <div className='h-20   rounded-xl mt-10 flex bg-slate-100 shadow-lg shadow-gray-500/30  justify-center	'> 
            <h1 className=' text-center mt-5'>خدماتنا</h1>
             <img className='h-10 ml-3 w-10 mt-5 'src={r3aya}/>
            </div>
            </Link>
       

            <Link to={'/dailycare'}>
            <div className=' h-20  rounded-xl mt-10 flex bg-slate-100 shadow-lg shadow-gray-500/30  justify-center	'> 
            <h1 className=' text-center mt-5'> رعاية مستمرة  </h1>
             <img className='h-10 ml-3 w-10 mt-5'src={service}/>
            </div>
            </Link>
       
            <div className=' h-20  rounded-xl mt-10 flex bg-slate-100 shadow-lg shadow-gray-500/30 justify-center	mb-10 ' > 
            <h1 className='text-center mt-5'>خدماتنا الطبيه </h1>
             <img className='h-10 ml-3 w-10  mt-5'src={ourserive}/>
            </div>
       
        </div>
    )
  }