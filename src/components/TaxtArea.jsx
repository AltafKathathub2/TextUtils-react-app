import React, { useState } from 'react';

export default function TaxtArea() {
   
    const [text, setText]= useState('');

    const chng = (e) =>{
       setText(e.target.value);
    }
    const upper = () =>{
       const newText = text.toUpperCase();
       setText(newText);
       
    }
    const lower = () =>{
       const newText = text.toLocaleLowerCase();
       setText(newText);
       
    }
    const reverce = () =>{
       const newText = text.split('').reverse().join('');
       setText(newText);
       
    }
    const clear = () =>{
       const newText ="";
       setText(newText);
       
    }
    const copy = () =>{
       const text = document.getElementById('textA');
       text.select()
       navigator.clipboard.writeText(text.value);
        
       
    }
   
    const remove = () =>{
     
        const newText = text.split(/[ ]+/);
       setText(newText.join(" "));
       
    }
   
  return (
    <div>
        <div className="container my-5">
            <h1>Write A Text</h1>
         <div >
           <textarea name="" id="textA" cols="150" rows="50" value={text} onChange={chng}></textarea>
          
         </div>
         <button type="button" className="btn btn-primary" onClick={upper}>ToUpperCase</button>
         <button type="button" className="btn btn-primary mx-4" onClick={lower}>ToLowerCase</button>
         <button type="button" className="btn btn-primary " onClick={reverce}>Reverce Text</button>
         <button type="button" className="btn btn-primary mx-4 " onClick={clear}>Clear Text</button>
         <button type="button" className="btn btn-primary  " onClick={copy}>Copy Text</button>
         <button type="button" className="btn btn-primary mx-4 " onClick={remove}>Remove ExtraSpaces</button>
         <div className="container">
          <h2>Previwe <br/>{text}</h2>
          <p>{text.split(" ").length}Words</p>
          <p>{text.length}character</p>
          <p>{0.008*text.split(" ").length} Minutes to Read</p>
          </div>
        </div>
       
    </div>
  )
}
