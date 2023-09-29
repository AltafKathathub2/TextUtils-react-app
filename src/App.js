
// import React, { useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// import TaxtArea from './components/TaxtArea';
// import Scrollbar from './components/Scrollbar';
import New from './components/New';


function App() {
  // const [mode, setMode]=useState('light');
  // const toggelMode = () =>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor="#1A0039";
  //     document.body.style.color="#fff";
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor="#fff";
  //     document.body.style.color="#000";
  //   }
  // }
  // const green = () =>{
  //   if(mode === 'light'){
  //     setMode('success');
  //     document.body.style.backgroundColor="#198754";
  //     document.body.style.color="#fff";
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor="#fff";
  //     document.body.style.color="#000";
  //   }
  // }
  return (
 <>
 <New />
 {/* <Scrollbar />

 <Navbar titel="Codez" mode={mode} toggelMode={toggelMode} green={green}/>
 <TaxtArea/> */}
 </>
  );
}

export default App;
