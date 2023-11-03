import React from 'react'
import ReactPlayer from 'react-player'
// grey box on the right side in recorder box - probably for decorative purpose will not render anything
// input prop - NA
// output-NA
const BigGreyBox = ({videoSrc}) => {
  return (
    <div id='audioList' style={{ height:"90vh",width:"50vw", backgroundColor:"#140F0F"}}>
      {/* <ReactPlayer
                        url={videoSrc}
                        controls
                        playing={true}
                        width="100%"
                    /> */}
    </div>
  )
}

export default BigGreyBox