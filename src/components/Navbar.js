import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      
    <div className="container-fluid bg-primary  font-weight-light rounded">
      <Link className="navbar-brand" to='/'>{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
          <li className="nav-item h5">
            <Link className="nav-link active " aria-current="page" to='/'>Home</Link>
          </li>
          <li className="nav-item h5">
            <Link className="nav-link active" to="/About">About</Link>
          </li>
        </ul>
   
        <div style={{borderRadius: '10px',backgroundColor:'#e53b3b',width:'30px',height:'30px'}} onClick={props.redMode} className="mx-2 my-2"></div>
        <div style={{borderRadius: '10px',backgroundColor:'#3feb3f',width:'30px',height:'30px'}} onClick={props.greenMode} className="mx-2 my-2"></div>
        <div style={{borderRadius: '10px',backgroundColor:'#e7c311',width:'30px',height:'30px'}} onClick={props.BlueMode} className="mx-2 my-2"></div> 
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className={`form-check-label h6 text-${props.mode==='light' ? 'dark' : 'light' }` }htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
</div>

      </div>
    </div>
  </nav>
  )
}

