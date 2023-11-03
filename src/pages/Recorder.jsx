import React, { useEffect, useState,useRef,useCallback } from 'react'
import {useAudioRecorder} from 'react-audio-voice-recorder'
import RecordButtonGrid from '../components/RecordButtonGrid'
import BigGreyBox from '../components/BigGreyBox'
import BigRecordBox from '../components/BigRecordBox'

const Recorder = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      console.log("data",data)
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    }
    ,
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    //mediaRecorderRef.current.requestData()
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
     mediaRecorderRef.current.addEventListener(
      'stop',
      handleStopCaptureClick
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef,handleDataAvailable,handleStopCaptureClick]);

  

  const addVideoElement = useCallback(()=>{
    console.log("cliccked video add")
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const video = document.createElement("video")
      //video.src=url;
      const sour=document.createElement("source")
      sour.src=url
      video.appendChild(sour)
      video.controls=true;
      document.getElementById("audioList").appendChild(video);
  }},[recordedChunks])


 

  
  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  //below code for audio
  const[mode,setMode]=useState("audio")
  const toggleButton=()=>{
    if (mode=="audio") {
      setMode("video")
    }else{
      setMode("audio")
    }
  }
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder
  } = useAudioRecorder();
  
  const toggle=()=>{
    togglePauseResume()
  }
  const stop=()=>{
    stopRecording()
    //addAudioElement(recordingBlob)
  }

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.getElementById("audioList").appendChild(audio);
  };

  const downloadAudio=()=>{
    const downloadBlob=recordingBlob;
    const url = URL.createObjectURL(downloadBlob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "audio.webm";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  useEffect(()=>{
    if(recordedChunks.length>0) 
    {
      console.log(recordedChunks.length,"recorded chunks length inside useeffect")
      addVideoElement()
    }
    if (!recordingBlob){ return }
    else {addAudioElement(recordingBlob)}
  },[recordingBlob,mediaRecorderRef,addVideoElement,recordedChunks.length])
  return (
    <div style={{display:"flex"}}>
      <button id='add' style={{display:'none'}} onClick={()=>addVideoElement()}>addddddddd</button>
    <RecordButtonGrid isRecording={isRecording} isPaused={isPaused} toggle={toggle} stop={stop} downloadAudio={downloadAudio} recordingBlob={recordingBlob} mode={mode} toggleButton={toggleButton} 
    handleStartCaptureClick={handleStartCaptureClick} handleStopCaptureClick={handleStopCaptureClick} handleDownload={handleDownload} capturing={capturing} />

    <BigRecordBox startRecording={startRecording} isRecording={isRecording} isPaused={isPaused} mode={mode} toggleButton={toggleButton}
     webcamRef={webcamRef} capturing={capturing} handleStopCaptureClick={handleStopCaptureClick} handleStartCaptureClick={handleStartCaptureClick} recordedChunks={recordedChunks} handleDownload={handleDownload} />
    {/* <button onClick={()=>{console.log(recordingBlob)}} >check if recordingBlob Present  </button>
    <button onClick={()=>{console.log(isPaused)}} >check if paused </button> */}
    <BigGreyBox/>
    </div>
  )
}

export default Recorder