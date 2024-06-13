import React from 'react'
import Button from '@mui/material/Button';
import '../../MainStyle.css'
import { Link, useNavigate } from 'react-router-dom';
export default function Emergencybotton() {
  const nav = useNavigate()
  const handelSubmit = () =>{
    nav("/emergency")
  }
  return (
    <div className=' h-[15vh] w-[90%]  pt-3'>
      <Button onClick={handelSubmit} className='w-[90%] h-[91%] text-9xl' sx={{backgroundColor:'#CA5050',
       }}   variant="contained">خدمة طارئة</Button>
    </div>
  )
}
