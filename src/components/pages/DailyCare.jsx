import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




export default function DailyCare() {
  return (
    <div className='form-div h-full'>
       <div className='bg-blue-300  h-64 w-full'> </div>
    <div className='image bg-gray-300 w-full h-1/2 rounded-full flex justify-center items-center'>
     
    </div>
   
     <Box sx={{display:'flex', flexDirection:'column' , gap:'10px'}}>
     <TextField id="outlined-basic" label="الاسم" variant="outlined" />
     <TextField id="outlined-basic" label="رقم الهاتف" variant="outlined" />
     <TextField id="outlined-basic" label="  عنوان السكن " variant="outlined" />

     <TextField id="outlined-basic" label=" عدد مرات الزياره" variant="outlined" />
     <TextField id="outlined-basic" label=" سنوات الخدمه" variant="outlined" />


  <Button sx={{backgroundColor:'#8598BE',fontSize:'20px' }} variant="contained">طلب</Button>
     </Box>
  
  </div>
  )
}
