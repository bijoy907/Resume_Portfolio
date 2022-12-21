import {React, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";


const Contact=()=>{
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_24ymbg6",
          "template_a0nw4rj",
          form.current,
          "MRxyx4lyDdCF8JQ4m"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <div className="contact-form" id="contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome from_head">
            {/* darkMode */}
            <span>Get in Touch</span>
            <span>Contact me</span>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user"  placeholder="Name"/>
            <input type="email" name="user_email" className="user" placeholder="Email"/>
            <textarea name="message" className="user" placeholder="Message"/>
            <input type="submit" value="Send" className="button submit_btn"/>
            <span>{done && "Thanks for Contacting me"}</span>
          </form>
        </div>
      </div>
    );
}
export default Contact;