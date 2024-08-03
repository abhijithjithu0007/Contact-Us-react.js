import React, { useState } from 'react';
import './Styles.scss';
import { MdDarkMode,MdOutlineLightMode  } from "react-icons/md";


const ContactForm = () => {

  const [mode ,setMode] = useState(false)
  const handleMode=()=>{
    setMode((prevState)=>!prevState)
  }
  return (
    <div className="background">
      <div className="container">
        <div className={mode?"screen":"screen-dark"}>
          <div className={mode?"screen-header":"screen-header-dark"}>
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div onClick={handleMode} className={mode?'mode-white':'mode-dark'}>
              {mode?<MdOutlineLightMode />:<MdDarkMode />}
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT INFO : +91 12345789</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="NAME"/>
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="EMAIL" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="CONTACT NO" />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="MESSAGE" />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button">CANCEL</button>
                  <button className="app-form-button">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
