import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButon from './IconButon';
import { IconButton } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SaveIcon from '@mui/icons-material/Save';

// contains icon button for analyze page 
// input props -NA
// output - NA
const divStyle={
  boxShadow:"0px 0px 10px 3px white", width:"50px",height:"50px",border:"black",backgroundColor:"black",
    borderStyle:"solid",borderRadius:"100px",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px 10px 10px 30px"
}

const RecordButtonGrid = ({isRecording,isPaused,toggle,stop,downloadAudio}) => {

  
  
  let resumeOrPause
  if (isRecording) {  
    if (isPaused) {
    resumeOrPause=<div style={divStyle}> 
    <IconButton onClick={()=>{toggle()}} > 
    <PlayArrowIcon  sx={{color:"white",height:"50px",width:"50px"}} />
    </IconButton>
    </div>
    }else{
     resumeOrPause=<div style={divStyle}>
     <IconButton onClick={()=>{toggle()}} > 
     <PauseIcon  sx={{color:"white",height:"50px",width:"50px"}} />
     </IconButton>
     </div>
    }
  } else{
    resumeOrPause=<></>    
  }
  return (
    <div style={{display:"flex",flexDirection:"column",height:"92vh",justifyContent:"center"}}>
        {/* <IconButon height={"50px"} width={"50px"} component={<PlayArrowIcon sx={{color:"white"}} />} />
        <IconButon height={"50px"} width={"50px"} component={<PauseIcon sx={{color:"white"}} />} /> */}

        {resumeOrPause}
        <div style={divStyle}> 
          <IconButton onClick={()=>{stop()}} > 
          <VideoCallIcon  sx={{color:"white",height:"50px",width:"50px"}} />
          </IconButton>
        </div>
        <div style={divStyle}> 
          <IconButton onClick={()=>{downloadAudio()}} > 
          <SaveIcon  sx={{color:"white",height:"50px",width:"50px"}} />
          </IconButton>
        </div>
    </div>
  )
}

export default RecordButtonGrid
