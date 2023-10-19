import React, { useEffect } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButon from './IconButon';
import { IconButton } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SaveIcon from '@mui/icons-material/Save';
import StopIcon from '@mui/icons-material/Stop';
import MicIcon from '@mui/icons-material/Mic';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// contains icon button for analyze page 
// input props -NA
// output - NA
const divStyle={
  boxShadow:"0px 0px 10px 3px white", width:"50px",height:"50px",border:"black",backgroundColor:"black",
    borderStyle:"solid",borderRadius:"100px",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px 10px 10px 30px"
}

const RecordButtonGrid = ({isRecording,isPaused,toggle,stop,downloadAudio,recordingBlob,mode,toggleButton,
  handleStartCaptureClick,handleStopCaptureClick,handleDownload,capturing}) => {
    useEffect(()=>{
      console.log("mode",mode)
      console.log("video capturing",capturing)

    })
  let videoStartOrStop
  if (mode=="video" && capturing==false) {
    videoStartOrStop=<div style={divStyle}> 
    <IconButton onClick={()=>{handleStartCaptureClick()}} > 
    <FiberManualRecordIcon  sx={{color:"red",height:"50px",width:"50px"}} />
    </IconButton></div>
  }else if (mode=="video" && capturing) {
    videoStartOrStop=<div style={divStyle}> 
                      <IconButton onClick={()=>{handleStopCaptureClick()}} > 
                      <StopIcon  sx={{color:"red",height:"50px",width:"50px"}} />
                      </IconButton>
                    </div>
  } else {
    videoStartOrStop=<></>
  }
  let audioOrVideo
  if(isRecording){
    audioOrVideo=<></>
  }else{ if(mode=="audio"){
    audioOrVideo= <div style={divStyle}> 
    <IconButton onClick={()=>{toggleButton()}} > 
    <VideoCallIcon  sx={{color:"white",height:"50px",width:"50px"}} />
    </IconButton>
  </div>
  }else{
    audioOrVideo= <div style={divStyle}> 
    <IconButton onClick={()=>{toggleButton()}} > 
    <MicIcon  sx={{color:"white",height:"50px",width:"50px"}} />
    </IconButton>
  </div>
  }}
 
  let showSave
  if (recordingBlob==undefined) {
    showSave=<></>
  }else{
    showSave= <div style={divStyle}> 
                <IconButton  onClick={()=>{downloadAudio()}} > 
                  <SaveIcon  sx={{color:"white",height:"50px",width:"50px"}} />
                </IconButton>
              </div>
  }
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
        {videoStartOrStop}
        {resumeOrPause}
        {isRecording ? <div style={divStyle}> 
          <IconButton onClick={()=>{stop()}} > 
          <StopIcon  sx={{color:"white",height:"50px",width:"50px"}} />
          </IconButton>
        </div>:<></>}
        
        {audioOrVideo}
        {showSave}
        {/* <div style={divStyle}> 
          <IconButton  onClick={()=>{downloadAudio()}} > 
          <SaveIcon  sx={{color:"white",height:"50px",width:"50px"}} />
          </IconButton>
        </div> */}
        {mode=="video" ?<div style={divStyle}> 
          <IconButton  onClick={()=>{handleDownload()}} > 
          <SaveIcon  sx={{color:"yellow",height:"50px",width:"50px"}} />
          </IconButton>
        </div>:<></>}
        
    </div>
  )
}

export default RecordButtonGrid
