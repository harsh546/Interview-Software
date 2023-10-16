import React from 'react'
import IconButon from './IconButon';
import MicIcon from '@mui/icons-material/Mic';
// contains the button for record page- record funtion will be coded here
// input prop - callback function(yet to be implmented)
// output - (yet to be determined)
const BigRecordBox = () => {
  return (
    <div style={{display:"flex" ,width:"90vw",alignItems:"center",justifyContent:"center",flexDirection:"column" }} >
        <h1>RECORD</h1>
        <IconButon height={"200px"} width={"200px"} component={<MicIcon sx={{color:"white",height:"150px",width:"150px"}} />} />
    </div>
  )
}

export default BigRecordBox