import React from 'react'
import { useRef,useState,useCallback } from 'react';
import Webcam from "react-webcam";

const VideoBox = ({webcamRef, capturing ,handleStopCaptureClick, handleStartCaptureClick,recordedChunks ,handleDownload}) => {
  
  return (
    <>
      <Webcam audio={true} ref={webcamRef} />
      {/* {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )} */}
    </>
  );

  
}

export default VideoBox