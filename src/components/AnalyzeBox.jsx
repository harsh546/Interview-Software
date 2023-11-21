import React from 'react'
import TextButton from './TextButton'
import NWC from '../sample/neutralWordCLoud.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// This component will render analyzed text like word cloud etc
// input prop - none
// output- analyzed word cloud , summary,semantic
const AnalyzeBox = ({wordCloudImage,wordcloud}) => {
  return (
    <div style={{borderStyle:"solid",width:"616px",height:"392px",display:"flex"}}>
        <div style={{borderStyle:"solid",height:"390px",width:"400Px",backgroundColor:"#140F0F"}}>
        <h1 style={{marginBottom:"5px"}} >ANALZYE</h1>
        {wordCloudImage &&
        <Zoom>
        <img height={307} width={390} src={`data:image/png;base64,${wordCloudImage}`} alt="not found" />
        <img height={307} width={390} src={`data:image/png;base64,${wordCloudImage}`} alt="not found" />
        </Zoom>
        }
        {/* <textarea className="body" style={{overflowY:'scroll',width:'395px',height:'290px',resize:'none',
        backgroundColor:'#140F0F',border:'none',color:'white',outline:'none'}}></textarea> */}
        </div>
        <div style={{display:"flex",flexDirection:"column",width:"210px",justifyContent:"space-evenly",alignItems:"center"}}>
            <TextButton content={"Semantic"} clickFunc={()=> {return 0}} />
            <TextButton content={"Word Cloud"} clickFunc={wordcloud} /> 
            <TextButton content={"Sentiment"} clickFunc={()=> {return 0}} />
            <TextButton content={"Summary"} clickFunc={()=> {return 0}} />
        </div>
    </div>
  )
}

export default AnalyzeBox