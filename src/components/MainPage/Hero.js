import React from 'react'
import * as boo from 'react-bootstrap'
const Hero = () => {
  return (
    <boo.Container>
      <boo.Row xs={6}  sm={8} lg={6}  style={{display:"flex",flexDirection:"row-reverse",alignItems:"center",padding:"2rem"}}  >
        <boo.Col xs={10} sm={8} lg={6}>
          <boo.Image style={{marginRight:"60px"}} height={'500px'} width={'662px'} src="download.png"  />
        </boo.Col>
        <boo.Col style={{height:"513px",width:"541px"}} >
        <h1  style={{textAlign:"left",fontFamily:"'work-sans',sans-serif",fontWeight:"700",fontSize:"80px",lineHeight:"90px"}}>Edit audio, text, video easily</h1>
        <p style={{fontFamily:"'inter',sans-serif",fontWeight:"500",fontSize:"20px",lineHeight:"30px",textAlign:"justify",width:"461px"}} >Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.</p>
        <div style={{display:"flex",alignItems:"initial"}}>
        <boo.Button size='lg' style={{ backgroundColor:"#54BD95",borderRadius:"40px",borderStyle:"none",width:"175px",height:"54px",fontFamily:"'inter',sans-serif",color:"white",marginRight:"5px"}}>Try it Out </boo.Button>
        <boo.Button size='lg' style={{ backgroundColor:"#54BD95",borderRadius:"40px",borderStyle:"none",width:"175px",height:"54px",fontFamily:"'inter',sans-serif",color:"white",marginLeft:"5px"}}>Try it Out </boo.Button>
        </div>
        </boo.Col>
        
      </boo.Row>
    </boo.Container>
  )
}

export default Hero