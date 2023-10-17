import React, { useEffect } from 'react'
import {useAudioRecorder} from 'react-audio-voice-recorder'
import RecordButtonGrid from '../components/RecordButtonGrid'
import BigGreyBox from '../components/BigGreyBox'
import BigRecordBox from '../components/BigRecordBox'
const Recorder = () => {
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
    if (!recordingBlob) return;
    addAudioElement(recordingBlob)
  },[recordingBlob])
  return (
    <div style={{display:"flex"}}>
    <RecordButtonGrid isRecording={isRecording} isPaused={isPaused} toggle={toggle} stop={stop} downloadAudio={downloadAudio} recordingBlob={recordingBlob} />
    <BigRecordBox startRecording={startRecording} isRecording={isRecording} isPaused={isPaused} />
    {/* <button onClick={()=>{console.log(recordingBlob)}} >check if recordingBlob Present  </button>
    <button onClick={()=>{console.log(isPaused)}} >check if paused </button> */}
    <BigGreyBox/>
    </div>
  )
}

export default Recorder