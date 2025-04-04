import './css/ContactMe.css';
import React from "react";

function ContactMe() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "32c21653-ffe5-472d-9d74-bc05ecbffe6b");

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
    <div>
      <form onSubmit={onSubmit} id="form" className="contact-form">

        <section id="contactme-input">
              <div id="main-input" className="f-container">
                <section id="contactme-name">
                  <label htmlFor="input-name">Name: </label>
                  <input id="input-name" type="text" name="name" required placeholder="Nicholas Kinard"/>
                </section>
                <section id="contactme-email">
                  <label htmlFor="input-email">Email: </label>
                  <input id="input-email" type="email" name="email" required placeholder="nk@nkinard.com"/>
                </section>
              </div>
              <div id="main-input">
                <section>
                  <label htmlFor="input-reason">Title and/or Reason for Contact: </label>
                  <input id="input-reason" type="text" name="title" required placeholder="Title of message here"/>
                </section>
              </div>
              <div id="main-input">
                <section>
                  <label htmlFor="input-message">Message: </label>
                  <textarea id="input-message" name="message" required placeholder="Enter your message here"></textarea>
                </section>
              </div>
            </section>

            <span className="result-diag">{result}</span>

            <button id="btn-submit" type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default ContactMe;