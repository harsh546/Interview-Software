import {  IconButton } from '@mui/material'
import React from 'react'

// same as Iconbutton but also has upload function .|accept prop not working as intended
const uploadVideo=()=>{
  document.getElementById("selectVideo").click()
}


const IconButonUpload = ({component,height,width,format,handleFileInput}) => {
  let formatt=format
  return (
    <div style={{ boxShadow:"0px 0px 5px 2px white", width:width,height:height,border:"black",backgroundColor:"black",
    borderStyle:"solid",borderRadius:"100px",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px 10px 10px 30px"}} >
        {/* <button className='button' style={{backgroundColor:"black",borderStyle:"none"}}>
        {component}
        </button> */}
        

        <IconButton style={{color:"white"}} onClick={()=>{uploadVideo()}}>
          <input  onChangeCapture={(e)=>handleFileInput(e)}  accept={`${formatt}`}  hidden type="file" name="" id="selectVideo" />              
          
            {component}
        </IconButton>
    </div>
  )
}

export default IconButonUpload