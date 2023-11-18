import localforage from 'localforage';
import React, { useCallback, useEffect } from 'react'

// grey box on the right side in recorder box - probably for decorative purpose will not render anything
// input prop - NA
// output-NA
const BigGreyBox = ({videoSrc,width="50vw",blobCount}) => {
  const addVideoElement = useCallback(()=>{
    /* if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      testAddBlob(blob) */
      //
      document.getElementById("audioList").textContent="";
      localforage.iterate(function(value, key, iterationNumber) {
      console.log(value.type)
      const url = URL.createObjectURL(value);
      const video = document.createElement("video")
      const sour=document.createElement("source")
      sour.src=url
      if(value.type.includes("video")){
        video.height=300
        video.width=400}
      else if(value.type.includes("audio")){
        video.height=90
        video.width=400}
      
      video.appendChild(sour)
      video.controls=true;
      
      document.getElementById("audioList").appendChild(video);
        console.log([key, value]);
    }).then(function() {
        console.log('Iteration has completed');
    }).catch(function(err) {
        // This code runs if there were any errors
        console.log(err);
    });
      //

      /* const url = URL.createObjectURL(blob);
      const video = document.createElement("video")
      const sour=document.createElement("source")
      sour.src=url
      video.appendChild(sour)
      video.controls=true;
      document.getElementById("audioList").appendChild(video); */
  },[])
  useEffect(()=>{
    addVideoElement()
  },[blobCount])
  return (
    <div id='audioList'className="body" style={{ height:"81vh",width:width, backgroundColor:"#140F0F",overflowY:"scroll",scrollBehavior:"smooth"}}>
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