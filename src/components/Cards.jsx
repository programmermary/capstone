import React from 'react'
import r3aya from '../assets/r3aya.png'
import service from '../assets/service.png'
import ourserive from '../assets/ourserive.png'
import { Link } from 'react-router-dom'

export default function Cards() {
    return (
        <div className='    w-[90%] bg-black-100 self-center      '>
            <div className='h-20  bg-[#2E335B] text-white rounded-xl mt-10 flex shadow-lg shadow-gray-500/30  justify-center	'> 
            <img className='h-10 ml-3 w-10 mt-5 'src={r3aya}/>
            <h1 className=' text-center mt-5 '>خدماتنا</h1>
            </div>
            <div className=' h-20 bg-[#2E335B] text-white rounded-xl mt-10 flex  shadow-lg shadow-gray-500/30  justify-center	'> 
            <img className='h-10 ml-3 w-10 mt-5'src={service}/>
            <h1 className=' text-center mt-5'> رعاية مستمرة  </h1>
            </div>
<<<<<<< HEAD
            <div className=' h-20 bg-[#2E335B] text-white rounded-xl mt-10 flex  shadow-lg shadow-gray-500/30 justify-center	mb-10 ' > 
            <img className='h-10 ml-3 w-10  mt-5'src={ourserive}/>
            <h1 className='text-center mt-5'>فرقنا الطبيه </h1>
            </div>
=======
            </Link>

            <Link to={'/Team'}>
            <div className=' h-20  rounded-xl mt-10 flex bg-slate-100 shadow-lg shadow-gray-500/30 justify-center	mb-10 ' > 
            <h1 className='text-center mt-5'>خدماتنا الطبيه </h1>
             <img className='h-10 ml-3 w-10  mt-5'src={ourserive}/>
            </div>
            </Link>
       
>>>>>>> origin/main
        </div>
    )
  }