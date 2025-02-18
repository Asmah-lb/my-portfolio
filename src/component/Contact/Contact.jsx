import React, { useRef, useState } from 'react';
import "./Contact.css"

function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bfc5359d-d2ee-4adb-9410-5f370e8402ff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact-page">
      <div className="contact-content">
      <h2 className="contact-header">CONTACT</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, accusamus, odit iusto animi harum tempora aspernatur nostrum adipisci perferendis dignissimos sint enim beatae consectetur, at quam! Beatae dolore ipsa soluta!
      </p>
      </div>
      

      <form className="contact-form"  onSubmit={onSubmit} >
        <div className="contact-item">
          <input
            type="text"
            className="contact-input"
            placeholder="Bellaz"
            
           name="name"
            id="name"
          />
        </div>

        <div className="contact-item">
          <input
            type="email"
            className="contact-input"
            placeholder="bellaz@mail.com"
            name="email"
            id="email"
          />
        </div>

        <div className="contact-item">
          <input
            style={{ padding: "40px 50px" }}
            type="text"
            className="contact-input"
            placeholder="Message"
            name="message"
            id="message"
  
          />
        </div>

        <button type="submit" className="contact-submit" value="Send" >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
