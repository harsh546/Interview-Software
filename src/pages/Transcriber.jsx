import React from 'react'
import MicNoneIcon from '@mui/icons-material/MicNone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import IconButonUpload from '../components/IconButonUpload';

const iconStyle={
  color:"white",height:"150px",width:"150px"
}

const Transcriber = () => {
  return (
    <div style={{display:"flex",height:"92vh",justifyContent:"space-evenly",alignItems:"center",flexDirection:"column"}}>
        <h2>UPLOAD FROM PC</h2>
        <div style={{display:"flex",width:"100vw",justifyContent:"space-evenly"}}>
        <div>
          
        <IconButonUpload format={"image/*"}   height={"200px"} width={"200px"} component={<MicNoneIcon sx={iconStyle} />} />
        <h1>AUDIO</h1>
        </div>
        <div>
        <IconButonUpload format={"audio/*"}  height={"200px"} width={"200px"} component={<VideoCallIcon   sx={iconStyle} />} />
        <h1>VIDEO</h1>
        </div>
        </div>
    </div>
  )
}

export default Transcriber