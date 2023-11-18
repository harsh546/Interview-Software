/* import React from 'react'
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

export default Transcriber */
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import IconButonUpload from '../components/IconButonUpload';
import TextBox from '../components/TextBox';
import BigGreyBox from '../components/BigGreyBox';
import { IconButton } from '@mui/material';
import raw from './colgate.txt'
const iconStyle={
  color:"white",height:"150px",width:"150px",boxShadow:"0px 0px 10px 3px white",border:"black",backgroundColor:"black",borderStyle:"solid",borderRadius:"100px"
}

const Transcriber = ({blobCount}) => {

  const putText=()=>{
    fetch(raw)
    .then((r) => r.text())
    .then(text  => {
      const textBox= document.getElementById('textBox');
      textBox.value =text
    }) 
  }

  return (
    
        <div  style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"10px",paddingRight:"10px"}}>
        {/* <div style={{borderStyle:"solid",height:"390px",width:"400Px",backgroundColor:"#140F0F"}}>
           <h1>TEXT</h1>
        </div> */}
        <TextBox/>
        <div>
          
        <IconButton onClick={()=>putText()} ><AddIcon sx={iconStyle} /></IconButton>
       {/*  <IconButonUpload format={"image/*"}   height={"200px"} width={"200px"} component={<AddIcon sx={iconStyle} />} /> */}
        
        </div>
        {/* <div id='audioList' style={{ height:"60vh",width:"30vw", backgroundColor:"#140F0F"}}>

        </div> */}
        <BigGreyBox width={"514.713px"} blobCount={blobCount} />
        
        </div>
  )
}

export default Transcriber