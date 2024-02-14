window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments); };
try {
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
} catch (error) {
    if (error.message.includes('Error: {"next":"/thanks?language=en","ok":true}')) {
        console.error('Error: Server response error. Please try again later.');
    } else {
        throw error; // re-throw other errors
    }
}
