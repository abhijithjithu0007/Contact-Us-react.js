import React, { useState } from 'react';
import './Styles.scss';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


const ContactForm = () => {

  const [mode, setMode] = useState(false)
  const [data, setData] = useState({ name: '', email: '' })
  const [error, setError] = useState({});
  const [modal, setModal] = useState('')


  console.log(modal);


  const handleMode = () => {
    setMode((prevState) => !prevState)
  }
  const handleSend = () => {
    let validations = validating()
    if (Object.keys(validations).length === 0) {
      setModal('Your meassage has been send successfully')
    } else {
      setError(validations)
    }
  }

  const validating = () => {
    const error = {}
    if (!data.name) {
      error.name = "* Name is required"
    } if (!data.email) {
      error.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      error.email = 'Invalid Email';
    }
    return error
  }




  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }


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
                  <input onChange={handleChange} name='name' className={mode ? "app-form-control" : "app-form-control-dark"} placeholder="NAME" />
                </div>
                {error.name ? error.name : ""}
                <div className="app-form-group">
                  <input onChange={handleChange} name='email' className={mode ? "app-form-control" : "app-form-control-dark"} placeholder="EMAIL" />
                </div>
                {error.email ? error.email : ""}
                <div className="app-form-group message">
                  <input className={mode ? "app-form-control" : "app-form-control-dark"} placeholder="MESSAGE" />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button">CANCEL</button>
                  <button onClick={handleSend} className="app-form-button">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {modal?<div className='modal-cont'>
          <div>
            <FaCheckCircle />
          </div>
          <p>
            {modal}
          </p>
        </div>:""}
        
        <div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
