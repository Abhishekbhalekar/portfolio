import React from 'react'
import './about.css';
import './contact.css';
import './home.css'

import send from '../Images/send.png'
import bottom from '../Images/Bottom.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_83o486d', 'template_0kb6qdm', form.current, 'gv267O63ODkwG_7Le')
      .then((result) => {
          console.log(result.text);
          console.log("message send");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <footer id='Contact'>
        <div className='container'>
            <div>
            <div>
                <h1 className='nice-meet'>I'm ready to talk</h1>
            </div>
            <div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='form-input'>
                <label>Name</label>
                <input type='text' name="user_name"/>
                </div>
                <div className='form-input'>
                <label>Email</label>
                <input type='email' name="user_email"/>
                </div>
                <div className='form-input'>
                <label>Message</label>
                <textarea rows="4" cols="50" name="message"></textarea>
                </div>
                <div className='send download-cv'>
                    <img src={send}/>
                    <input type="submit" value="Send" className='load'/>
                </div>
            </form>
            </div>
            </div>
        </div>
        <div className='contact-hand'>
            <img src={bottom} className='img-right' />
        </div>
    </footer>
  )
}

export default Contact