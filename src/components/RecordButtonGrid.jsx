import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RecordButon from './RecordButon';
import PauseIcon from '@mui/icons-material/Pause';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SaveIcon from '@mui/icons-material/Save';
const RecordButtonGrid = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",height:"91vh",justifyContent:"center"}}>
        <RecordButon component={<PlayArrowIcon sx={{color:"white"}} />} />
        <RecordButon component={<PauseIcon sx={{color:"white"}} />} />
        <RecordButon component={<VideoCallIcon sx={{color:"white"}} />} />
        <RecordButon component={<SaveIcon sx={{color:"white"}} />} />
    </div>
  )
}

export default RecordButtonGrid
