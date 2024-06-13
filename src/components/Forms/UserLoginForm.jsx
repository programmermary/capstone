import React from 'react'
import user from '../../assets/user.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import UserSubmitLoginButton from '../bottons/UserSubmitLoginButton';

export default function UserLoginForm() {
  return (
    <div className='bg-red-800 bg-opacity-30 border h-1/2 w-1/2 border-blue-500 flex flex-col justify-center items-center'>
      <div className='img'>
        <img src={user} alt="this is user image" className='w-1/2 h-1/2 self-center' />
      </div>
        <Box className='flex flex-col justify-center items-center gap-5'
         component="form"
        >
            <TextField id="outlined-basic" label="الاسم" variant="outlined" required type='text' className='rounded-lg  rtl:space-x-reverse'/>
            <TextField id="outlined-basic" label="العمر" variant="outlined" required type='number'/>
            <TextField id="outlined-basic" label="رقم الهاتف" variant="outlined" required type='phone'/>
            <TextField id="outlined-basic" label="الحالة المرضية" variant="outlined" required type='text'/>
            <TextField id="outlined-basic" label="عنوان السكن" variant="outlined" required type='text'/>
            <UserSubmitLoginButton/>
        </Box>
    </div>
  )
}
