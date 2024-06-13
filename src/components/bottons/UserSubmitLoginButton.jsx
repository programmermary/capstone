import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function UserSubmitLoginButton() {
  const HandelSubmit = () =>{
   
  }
  return (
    <div className='w-1/2'>
       <Button onClick={HandelSubmit} variant="contained">ارسال</Button>
    </div>
  )
}
