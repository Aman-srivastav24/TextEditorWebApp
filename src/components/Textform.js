import React, { useState } from "react";
import img from '../components/textgif.gif';
import {useSpeechSynthesis} from 'react-speech-kit';

export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase Clicked");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase" , "success")
    }
    const handlerevClick=()=>{
        // console.log("UpperCase Clicked");
        let newText=text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text Reversed" , "success")
    }
    const handlelowerClick=()=>{
        // console.log("UpperCase Clicked");
        let newText=text.toLowerCase ();
        setText(newText)
        props.showAlert("Converted to LowerCase" , "success")
    }
    const handleOnChange=(event)=>{
        // console.log("Text changed");
        setText(event.target.value)
    }
    const handlespeech=(event)=>{
        // console.log("Text changed");
        speak({text:text})
    }
  const [text, setText] = useState("");
  const{speak} = useSpeechSynthesis();
//   setText=( )
const mystyle={
  width:"45px",
  height:"45px",
}
  return (
    <>
      <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1 className="alert-primary alert rounded text-black h5   " >{props.heading} <img className="rounded  " style={mystyle} src={img} alt="" srcset="" /> </h1>
        <div className="mb-3" >
        <textarea
          className="form-control"
          value={text}
          id="mybox"
          rows="8"
          onChange={handleOnChange}
          style={{
              backgroundColor: props.mode==='dark'?'black':'white' ,
              color:props.mode==='dark'?'white':'black'
          }}
        ></textarea>
      <button disabled={text.length===0} className="btn btn-danger my-2 mx-2" onClick={handleUpClick} >Change To UpperCase</button>
      <button disabled={text.length===0} className="btn btn-danger  my-2 mx-2" onClick={handlelowerClick}>Change To Lower case</button>
      <button disabled={text.length===0} className="btn btn-danger  my-2 mx-2" onClick={handlerevClick}>Reverse the Text</button>
      <button disabled={text.length===0} className="btn btn-danger  my-2 mx-2" onClick={handlespeech}>Text to speech</button>
      </div>
      </div>
      <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
          <h2 className="alert alert-primary h5">Your Text Summary </h2>
          <p>{(text.split(" ").filter((element)=>{return element.length!==0 }).length)} Words and {text.length} characters</p>
          <p>Normal users takes {((0.008 * text.split(" ").filter((element)=>{return element.length!==0 }).length)).toFixed(2) } Minutes to Read</p>
          <h3 className="alert alert-primary h5">Preview</h3>
          <p>{text}</p>
      </div>
    </>
  );
}
