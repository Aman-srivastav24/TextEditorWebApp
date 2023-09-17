
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import logo from './components/textgif2.gif';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); // whether darkmode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      console.log("aman")
      setMode('dark');
      document.body.style.backgroundColor = "black"
      showAlert("Dark Mode is On !", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is On !", "success")
    }
  };
  const redMode = () => {
    if (mode === 'light') {
      console.log("aman")
      setMode('light');
      document.body.style.backgroundColor = "red"
      showAlert("Red Mode is On !", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is On !", "success")
    }
  };
  const greenMode = () => {
    if (mode === 'light') {
      console.log("aman")
      setMode('light');
      document.body.style.backgroundColor = "green"
      showAlert("Green Mode is On !", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is On !", "success")
    }
  };
  const BlueMode = () => {
    if (mode === 'light') {
      console.log("aman")
      setMode('light');
      document.body.style.backgroundColor = "#e7c311"
      showAlert("Yellow Mode is On !", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is On !", "success")
    }
  };   
  
  const mystyle={
    width:"60px",
    height:"60px",
  }
  return (
    <>
      <Router>
     <Routes>
        <Navbar title={<img src={logo} alt="logo" style={mystyle}/>} mode={mode} toggleMode={toggleMode} redMode={redMode} greenMode={greenMode} BlueMode={BlueMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
      
        
   
      <Route exact path="/" element={<Textform heading="Enter Your Text Below " mode={mode} showAlert={showAlert} />} />
      <Route exact path="/about" element={<About mode={mode}/>} />
  
    </Routes>
  

        </div>
        
   </Router>
    </>
  );
}

 
export default App;
