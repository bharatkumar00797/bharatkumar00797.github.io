import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mzbnekbk");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="php-email-form">
      <div className="row">
        <div className="col-md-12 mb-3">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="col-md-12 text-center my-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div className="col-md-12 text-center">
          <button type="submit" className="button button-a button-big button-rouded" disabled={state.submitting}>Send Message</button>
        </div>
      </div>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
