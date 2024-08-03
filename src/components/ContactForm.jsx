import React, { useState } from 'react';
import './Styles.scss';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";


const ContactForm = () => {

  const [mode, setMode] = useState(false)
  const [send, setSend] = useState(false)
  const [data, setData] = useState({ name: '', email: '' })



  const handleMode = () => {
    setMode((prevState) => !prevState)
  }
  const handleSend = () => {
    setSend(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

console.log(data);

  return (
    <div className="background">
      <div className="container">
        <div className={mode ? "screen" : "screen-dark"}>
          <div className={mode ? "screen-header" : "screen-header-dark"}>
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div onClick={handleMode} className={mode ? 'mode-white' : 'mode-dark'}>
              {mode ? <MdOutlineLightMode /> : <MdDarkMode />}
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
                  <input onChange={(e) => handleChange(e)} className="app-form-control" placeholder="NAME" />
                </div>
                <div className="app-form-group">
                  <input onChange={(e) => handleChange(e)} className="app-form-control" placeholder="EMAIL" />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="MESSAGE" />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button">CANCEL</button>
                  <button onClick={handleSend} className="app-form-button">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {send ? (<p>Please fill it</p>) : ''}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
