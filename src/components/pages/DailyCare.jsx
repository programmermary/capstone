import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import user from '../../assets/user.png'




export default function DailyCare() {
  return (
    <div className='form-div h-full'>
      <img className=' h-44 w-44 mt-20 mb-20 mr-16' src={user}/>
       
       
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
