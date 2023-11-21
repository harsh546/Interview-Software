import React from 'react'

// Text box for transcriber
// InputProps- (yet to be decided)
// output - Text
const TextBox = ({setTextBoxContent,textBoxContent}) => {
  return (
    <div style={{borderStyle:"solid",height:"390px",width:"400Px",backgroundColor:"#140F0F"}}>
        <h1>TEXT</h1>
        <textarea onChange={(e)=>setTextBoxContent(e.target.value)} value={textBoxContent}  id='textBox' className="body" style={{overflowY:'scroll',width:'395px',height:'290px',resize:'none',backgroundColor:'#140F0F',border:'none',color:'white',outline:'none'}}></textarea>
    </div>
  )
}

export default TextBox