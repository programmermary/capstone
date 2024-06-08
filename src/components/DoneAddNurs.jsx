import React from 'react'
import Button from '@mui/material/Button';
import yes from '../assets/yes.png'
import { Link } from 'react-router-dom';

export default function DoneAddNurs() {

return (
<div >
<div className=' bg-gray-300 w-full h-full block justify-center items-center mt-10 rounded-2xl'>
   <img src={yes} alt=""  className=' w-1/2 h-1/2 pt-20 mr-20 pb-20 ' />

<h1 className=' text-center mt-5 pb-20'> لقد تم اضافة الممرض للفريق </h1>
</div>
<br></br>
<Link to={'/'}>
<Button  sx={{backgroundColor:'#8598BE',fontSize:'20px',marginRight:'100px',marginTop:'20px',marginBottom:'20px'}} variant="contained">الصفحه الرئيسيه 
</Button>
</Link>

</div>
    )
}