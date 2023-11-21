import React, { useState } from 'react'
import TextBox from '../components/TextBox'
import AnalyzeBox from '../components/AnalyzeBox'
import TextButton from '../components/TextButton';
import IconButonUpload from '../components/IconButonUpload';
import axios from 'axios'
const Analyzer = () => {
  const[textBoxContent,setTextBoxContent]=useState('');
  const[wordCloudImage,setWordCloudImage]=useState()
  const wordcloud=()=>{
    if(textBoxContent.trim()==""){
      alert("no text found")
      return
    }
    else{
      const formData = new FormData();
    formData.append('file', new Blob([textBoxContent], { type: 'text/plain' }), 'file.txt');
    axios.post('http://127.0.0.1:5000/api/convert/neg', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        const wordCloudUrl = response.data.wordcloud_url;

        // Decode the base64-encoded URL
        setWordCloudImage(wordCloudUrl)
      })
      .catch(error => {
        console.error('Error sending data to server:', error);
      });
    }
  }
  const handleFileInput=(event)=>{
    const file =event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload=(e)=>{
        setTextBoxContent(e.target.result)
      }
      reader.readAsText(file)
    }
  }
  const checkEmpty=()=>{
    if(textBoxContent.trim()==""){
      alert("no text found")
    }
  } 
  return (
    <div style={{height:"92vh",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
        <TextBox setTextBoxContent={setTextBoxContent} textBoxContent={textBoxContent} />
        {/* <TextButton content={"Upload Text File"} clickFunc={()=> {return 0}} /> */}
        <IconButonUpload  component={"Upload Text File"} handleFileInput={handleFileInput}  />
      </div>
        <AnalyzeBox wordCloudImage={wordCloudImage} wordcloud={wordcloud} />
    </div>
  )
}

export default Analyzer