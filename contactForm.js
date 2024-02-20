
/*import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {

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

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mzbnekbk");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
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
