import React from 'react'
import cannula from '../../assets/cannula.png';
import sugar from '../../assets/sugar.png'
import bloodPressure from '../../assets/blood-pressure.png'

import injection from '../../assets/injection.png'

import hand from '../../assets/hand.png'

import suture from '../../assets/suture.png'







export default function Services() {
  return (
    <div>
         <div className='bg-slate-100 gap-5 grid grid-cols-2 mt-5 '>

<div className='bg-slate-200 w-40 h-48 rounded-2xl  shadow-lg shadow-gray-500/30  '>
            
        <div className='bg-slate-100 rounded-2xl w-28 h-24 mt-2 mr-5 '>
        <img className=' h-20 w-20 mt-6 mb-20  mr-4' src={suture}/>
           
        </div>
        <h3 className='mr-8 text-sm '>الاسم   </h3>

         <h3 className='mr-8 text-xs '>السعر 10 الاف  </h3>
         <button className='bg-red-300 rounded-sm w-20 mr-8 text-xs '> احجز هنا  </button>

 </div>
 <div className='bg-slate-200 w-40 h-48 rounded-2xl  shadow-lg shadow-gray-500/30  '>
            
        <div className='bg-slate-100 rounded-2xl w-28 h-28 mt-2 mr-5 '>
        <img className=' h-20 w-20 mt-4 mb-20  mr-4'  src={hand}/>
           
        </div>
        <h3 className='mr-8 text-sm '>الاسم   </h3>

         <h3 className='mr-8 text-xs '>السعر 10 الاف  </h3>
         <button className='bg-red-300 rounded-sm w-20 mr-8 text-xs '> احجز هنا  </button>

 </div>
 <div className='bg-slate-200 w-40 h-48 rounded-2xl  shadow-lg shadow-gray-500/30  '>
            
        <div className='bg-slate-100 rounded-2xl w-28 h-28 mt-2 mr-5 '>
        <img className=' h-20 w-20 mt-4 mb-20  mr-4' src={sugar}/>
           
        </div>
        <h3 className='mr-8 text-sm '>الاسم   </h3>

         <h3 className='mr-8 text-xs '>السعر 10 الاف  </h3>
         <button className='bg-red-300 rounded-sm w-20 mr-8 text-xs '> احجز هنا  </button>

 </div>
 <div className='bg-slate-200 w-40 h-48 rounded-2xl  shadow-lg shadow-gray-500/30  '>
            
        <div className='bg-slate-100 rounded-2xl w-28 h-28 mt-2 mr-5 '>
        <img className=' h-20 w-20 mt-4 mb-20  mr-4' src={bloodPressure}/>
           
        </div>
        <h3 className='mr-8 text-sm '>الاسم   </h3>

         <h3 className='mr-8 text-xs '>السعر 10 الاف  </h3>
         <button className='bg-red-300 rounded-sm w-20 mr-8 text-xs '> احجز هنا  </button>

 </div>
 <div className='bg-slate-200 w-40 h-48 rounded-2xl  shadow-lg shadow-gray-500/30  '>
            
            <div className='bg-slate-100 rounded-2xl w-28 h-28 mt-2 mr-5 '>
            <img className=' h-20 w-20 mt-4 mb-20  mr-4' src={injection}/>
               
            </div>
            <h3 className='mr-8 text-sm '>الاسم   </h3>
    
             <h3 className='mr-8 text-xs '>السعر 10 الاف  </h3>
             <button className='bg-red-300 rounded-sm w-20 mr-8 text-xs '> احجز هنا  </button>
    
     </div>

  <div className='bg-slate-200 w-40 h-48 rounded-2xl  shadow-lg shadow-gray-500/30  '>
            
        <div className='bg-slate-100 rounded-2xl w-28 h-28 mt-2 mr-5 '>
        <img className=' h-20 w-20 mt-4 mb-20  mr-4' src={cannula}/>
           
        </div>
        <h3 className='mr-8 text-sm '>الاسم   </h3>

         <h3 className='mr-8 text-xs '>السعر 10 الاف  </h3>
         <button className='bg-red-300 rounded-sm w-20 mr-8 text-xs '> احجز هنا  </button>

 </div>
     
 
 

 

</div>
    </div>
  )
}
