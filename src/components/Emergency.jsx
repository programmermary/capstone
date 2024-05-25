import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import emergency from '../assets/emergency.svg'
export default function Emergency() {
  return (
    <div className='form-div h-full'>
      <div className='image bg-gray-300 w-full h-1/2 rounded-full flex justify-center items-center'>
        <img src={emergency} alt="" srcset="" className='w-1/2 h-1/2 ' />
      </div>
       <Box sx={{display:'flex', flexDirection:'column' , gap:'10px'}}>
       <TextField id="outlined-basic" label="الاسم" variant="outlined" />
       <TextField id="outlined-basic" label="رقم الهاتف" variant="outlined" />
       <Button sx={{backgroundColor:'#8598BE',fontSize:'20px'}} variant="contained">طلب</Button>
       </Box>
    </div>
  )
}
