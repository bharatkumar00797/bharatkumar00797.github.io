  /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/mzbnekbk",
    title: "How can we help?",
    fields: [
	    {
        type: "text",
        id: "name",
        name: "name",
	      required: true,
        placeholder: " Your name",
      },
      { 
        type: "email", 
        id: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
	    {
        type: "text",
        id: "subject",
        name: "subject",
	      required: true,
        placeholder: " Subject",
     	 },
        {
        type: "textarea",
        id: "Message:",
        name: "message",
	      required: true,
        placeholder: "What's on your mind?",
     	 },
     
	
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });

