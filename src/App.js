import { useState } from 'react';
import './App.css';
import LowerNav from './components/LowerNav';
import Recorder from './pages/Recorder';
import Analyzer from './pages/Analyzer';
import Transcriber from './pages/Transcriber';
import localforage from"localforage"
function App() {
  const [blobCount,setBlobCount]=useState(-1);
  
  const testAddData=async()=>{
    try {
      const value = await localforage.setItem('01',"testDatata");
      console.log("added data")
      // This code runs once the value has been loaded
      // from the offline store.
      console.log(value);
  } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
  }
  }
  const testClearData=async()=>{
    try {
      const value = await localforage.clear();
      console.log("cleared")
      // This code runs once the value has been loaded
      // from the offline store.
  } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
  }
  }
  //ttest();
  let output
  const [page,SetPage]=useState("recorder")
  /* console.log(page) */
  const sendDataToParent=(option)=>{
    /* console.log(option) */
    SetPage(option)
  }
  if(page==="analyzer"){
  output  = <Analyzer/>
  } else if(page==="transcriber"){
    output=<Transcriber blobCount={blobCount} />
  } else{
    output=<Recorder blobCount={blobCount} setBlobCount={setBlobCount} />
  }
  return (
    <div style={{backgroundColor:"black"}} className="App" >
    {/* <button onClick={()=>testAddData()}>add data</button>
    <button onClick={()=>testClearData()}>clear data</button> */}
    {output}
    
    <LowerNav  sendDataToParent={sendDataToParent}  />
    </div>
  );
}

export default App;
