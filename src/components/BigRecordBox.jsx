import React from 'react'
import MicIcon from '@mui/icons-material/Mic';
import {IconButton } from '@mui/material'
import {useAudioRecorder} from 'react-audio-voice-recorder'
// contains the button for record page- record funtion will be coded here
// input prop - callback function(yet to be implmented)
// output - (yet to be determined)
const divStyle={
  boxShadow:"0px 0px 10px 3px white", 
  width:"200px",
  height:"200px",
  border:"black",
  backgroundColor:"black",
  borderStyle:"solid",
  borderRadius:"100px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  margin:"10px 10px 10px 30px"
}
const BigRecordBox = ({startRecording,isRecording,isPaused}) => {
    let heading
    if (isRecording) {
      if (isPaused) {
        heading=<h1>PAUSED</h1>
      }else{
        heading=<h1>RECORDING...</h1>
      }
    }else{
      heading=<h1>RECORD</h1>
    }
    return (
    <div style={{display:"flex" ,width:"90vw",alignItems:"center",justifyContent:"center",flexDirection:"column" }} >
        {heading}
        <div style={divStyle} >
        <IconButton onClick={()=>{startRecording()}} > 
        <MicIcon  sx={{color:"white",height:"150px",width:"150px"}} />
        </IconButton>
    </div>
        {/* <IconButon  height={"200px"} width={"200px"} component={<MicIcon sx={{color:"white",height:"150px",width:"150px"}} />} /> */}
    </div>
  )
}

export default BigRecordBox