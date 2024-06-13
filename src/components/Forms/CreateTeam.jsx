import React from 'react'
import teamwork from '../../assets/TeamWork.png'
import TextField from '@mui/material/TextField';
export default function CreateTeam() {
  return (
    <div>
      <h1>this is team page</h1>
      <div className='main h-full w-full'>
        <div className='shape bg-gray-500 rounded-tl-5px rounded-br-5px'> 
           <div className="img">
               <img src={teamwork}/>
           </div>
        </div>
        <div className="form">
           <TextField id="outlined-basic" label="اسم الفريق" variant="outlined" required type='text' className='rounded-lg rtl'/>
           <TextField id="outlined-basic" label="عدد اعضاء الفريق" variant="outlined" required type='number' className='rounded-lg rtl'/>
           <TextField id="outlined-basic" label="عنوان عيادة الفريق" variant="outlined" required type='text' className='rounded-lg rtl'/>
        </div>
      </div>
    </div>
  )
}
