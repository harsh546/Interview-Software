import React, { useEffect, useState,useRef,useCallback } from 'react'
import {useAudioRecorder} from 'react-audio-voice-recorder'
import RecordButtonGrid from '../components/RecordButtonGrid'
import BigGreyBox from '../components/BigGreyBox'
import BigRecordBox from '../components/BigRecordBox'
import localforage from"localforage"
const Recorder = ({blobCount,setBlobCount}) => {
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
  
  const StoreVideo=useCallback(()=>{
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      testAddBlob(blob)
  }
  },[recordedChunks])
 

  /* const handleStopCaptureClick = useCallback(() => {
    //mediaRecorderRef.current.requestData()
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]); */
  const handleStopCaptureClick = () => {
    //mediaRecorderRef.current.requestData()
    mediaRecorderRef.current.stop();
    setCapturing(false);
    /* StoreAndDisplay() */
  }

  

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

  
  const testAddBlob=async(blob)=>{
    try {
      const keys = await localforage.keys()
      const strLast=String(keys.length)
      const value = await localforage.setItem(strLast,blob);
      console.log("added data")
      setBlobCount(keys.length);
      // This code runs once the value has been loaded
      // from the offline store.
      console.log(value);
  } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
  }
  }

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
    //console.log(recordingBlob.type)
    //testAddBlob(recordingBlob)
    //addAudioElement(recordingBlob)
  }

  /* const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.getElementById("audioList").appendChild(audio);
  }; */

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
    StoreVideo()
    /* if(recordedChunks.length>0) 
    {
      console.log(recordedChunks.length,"recorded chunks length inside useeffect")
      addVideoElement()
    } */
    if (!recordingBlob){ return }
    else {testAddBlob(recordingBlob)}
  },[recordingBlob,mediaRecorderRef,addVideoElement,recordedChunks.length,StoreVideo])

  /* useEffect(()=>{
    addVideoElement()
  },[blobCount,addVideoElement]) */
  return (
    <div style={{display:"flex"}}>
    <RecordButtonGrid isRecording={isRecording} isPaused={isPaused} toggle={toggle} stop={stop} downloadAudio={downloadAudio} recordingBlob={recordingBlob} mode={mode} toggleButton={toggleButton} 
    handleStartCaptureClick={handleStartCaptureClick} handleStopCaptureClick={handleStopCaptureClick} handleDownload={handleDownload} capturing={capturing} />

    <BigRecordBox startRecording={startRecording} isRecording={isRecording} isPaused={isPaused} mode={mode} toggleButton={toggleButton}
     webcamRef={webcamRef} capturing={capturing} handleStopCaptureClick={handleStopCaptureClick} handleStartCaptureClick={handleStartCaptureClick} recordedChunks={recordedChunks} handleDownload={handleDownload} />
    {/* <button onClick={()=>{console.log(recordingBlob)}} >check if recordingBlob Present  </button>
    <button onClick={()=>{console.log(isPaused)}} >check if paused </button> */}
    <BigGreyBox blobCount={blobCount} />
    </div>
  )
}

export default Recorder