import React from 'react'
import RecordButon from './RecordButon'
import MicIcon from '@mui/icons-material/Mic';

const BigRecordBox = () => {
  return (
    <div style={{display:"flex" ,width:"90vw" }} >
        <RecordButon height={"200px"} width={"200px"} component={<MicIcon sx={{color:"white",height:"150px",width:"150px"}} />} />
    </div>
  )
}

export default BigRecordBox