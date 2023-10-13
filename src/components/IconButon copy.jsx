import {  IconButton } from '@mui/material'
import React from 'react'

const uploadVideo=()=>{
  document.getElementById("selectVideo").click()
}


const IconButonUpload = ({component,height,width,format}) => {
  let formatt=format
  return (
    <div style={{boxShadow:"0px 0px 10px 3px white", width:width,height:height,border:"black",backgroundColor:"black",
    borderStyle:"solid",borderRadius:"100px",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px 10px 10px 30px"}} >
        {/* <button className='button' style={{backgroundColor:"black",borderStyle:"none"}}>
        {component}
        </button> */}
        
        <IconButton onClick={()=>{uploadVideo()}}>
          <input  accept={`${formatt}`}  hidden type="file" name="" id="selectVideo" />              
          
            {component}
        </IconButton>
    </div>
  )
}

export default IconButonUpload