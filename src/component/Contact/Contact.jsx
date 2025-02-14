import React, { useState } from "react";
import "./Contact.css"

function Contact() {
  const [formData, setFormDAta] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = function (e) {
    const { name, value } = e.target;
    setFormDAta({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
      <h2 className="contact-header">CONTACT</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, accusamus, odit iusto animi harum tempora aspernatur nostrum adipisci perferendis dignissimos sint enim beatae consectetur, at quam! Beatae dolore ipsa soluta!
      </p>
      </div>
      

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-item">
          <input
            type="text"
            className="contact-input"
            placeholder="Bellaz"
            required
            onChange={handleFormChange}
            name="name"
            id="name"
            value={formData.name}
          />
        </div>

        <div className="contact-item">
          <input
            type="email"
            className="contact-input"
            placeholder="bellaz@mail.com"
            required
            onChange={handleFormChange}
            name="email"
            id="email"
            value={formData.email}
          />
        </div>

        <div className="contact-item">
          <input
            style={{ padding: "40px 50px" }}
            type="text"
            className="contact-input"
            placeholder="Message"
            required
            onChange={handleFormChange}
            name="message"
            id="message"
            value={formData.message}
          />
        </div>

        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
