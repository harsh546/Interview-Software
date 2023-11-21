import React from 'react'
import { IconButton } from '@mui/material'

// button to render text
// input Props- content to be rendered
// output- 
const TextButton = ({content,clickFunc}) => {
  return (
    <IconButton onClick={()=>clickFunc()} sx={{color:"white",boxShadow:"0px 0px 5px 1px white",borderRadius:"15px",width:"190px"}}>
    {content}
    </IconButton>
  )
}

export default TextButton