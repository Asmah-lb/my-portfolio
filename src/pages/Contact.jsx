import React, { useState } from "react";

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
      <h2 className="form-header">CONTACT</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo
        consequuntur obcaecati.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-item">
          <input
            type="text"
            className="form-input"
            placeholder="Bellaz"
            required
            onChange={handleFormChange}
            name="name"
            id="name"
            value={formData.name}
          />
        </div>

        <div className="form-item">
          <input
            type="email"
            className="form-input"
            placeholder="bellaz@mail.com"
            required
            onChange={handleFormChange}
            name="email"
            id="email"
            value={formData.email}
          />
        </div>

        <div className="form-item">
          <input
            style={{ padding: "40px 50px" }}
            type="text"
            className="form-input"
            placeholder="Message"
            required
            onChange={handleFormChange}
            name="message"
            id="message"
            value={formData.message}
          />
        </div>

        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
