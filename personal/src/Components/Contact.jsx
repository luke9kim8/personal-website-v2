import React from 'react';
import '../App.css'

const Contact = (props) => {
  const assembleEmail = (addr, subj, msg) => {
    
  }
  const send = (event) => {
    console.log("hello")
    event.preventDefault();
  }
  return (
    <div ref={props.divRef} className="contact">
        <div className="contact title">
        <h3 className="titleText"> Contact </h3>
        </div>
        <form className="contactForm" onSubmit={send}>
          <p>Email</p>
          <input type="text" placeholder="Type email here"/>
          <p>Subject</p>
          <input type="text" placeholder="Type subject here"/>
          <p>Message</p>
          <input type="text" placeholder="Type message here"/>
          <input type="submit" value="submit" />
        </form>
    </div>
  );
}

export default Contact;
