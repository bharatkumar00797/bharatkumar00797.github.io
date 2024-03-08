/*import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm()  {

  const [state, handleSubmit] = useForm("https://formspree.io/f/mzbnekbk");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
      />
      
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
      
      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        type="text"
        name="subject"
        required
      />
      
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
      
      <button type="submit" disabled={state.submitting}>Send Message</button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
*/
import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mzbnekbk");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (state.succeeded) {
      alert("Form submitted successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <label htmlFor="email">Your Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      <button type="submit" disabled={state.submitting}>Send Message</button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;


 /*
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mzbnekbk");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    alert("Thank you.");
    window.location.reload();
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Your Name</label>
      <input id="name" type="text" name="name" required />

      <label htmlFor="email">Your Email</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="subject">Subject</label>
      <input id="subject" type="text" name="subject" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="5" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>Send Message</button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
*/
