// import React, { useRef, useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faMobile, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import './Contactus.css';
// import emailjs from 'emailjs-com';
// import Snackbar from '@mui/material/Snackbar';
// import { ThemeProvider } from '@emotion/react';





// const Contactus = () => {
//     const [open, setOpen] = useState(false);

//     const handleSubmit = (event) => {
//         event.preventDefault();
        
//         // Get form data
//         const formData = {
//             name: event.target.name.value,
//             email: event.target.email.value,
//             phone: event.target.phone.value,
//             message: event.target.message.value
//         };

//         // Check for null values
//         if (!formData.name || !formData.email || !formData.phone || !formData.message) {
//             alert("Please fill in all fields.");
//             return;
//         }

//         // Basic form submission logic, you can replace this with your own logic
//         console.log('Form submitted:', formData);

//         // Email sending logic (this is just a placeholder, replace it with actual email sending logic)
//         emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, event.target, process.env.REACT_APP_PUBLIC_KEY)
//           .then((result) => {
//             setOpen(true);
//             event.target.reset();
//           })
//           .catch((error) => {
//             console.error('Email send failed:', error);
//           });
//     };

//     return (
//         <>
//             <div className="contactus"><h1>Contact us</h1></div>
//             <div className="contact-outer">
//                 <div className="contact-form">
//                     <form onSubmit={handleSubmit}>
//                         <input placeholder='Name' type="text" id="name" name="name" required />
//                         <input placeholder='Email' type="email" id="email" name="email" required />
//                         <input placeholder='Phone No' type="text" id="phone" name="phone" required />
//                         <textarea placeholder='Message....' id="message" name="message" required />
//                         <button type="submit">Send</button>
//                     </form>
//                 </div>
//                 <div className="contact-info">
//                     <p><FontAwesomeIcon icon={faPhone} /> <span5>Phone</span5> : +91 7200861688</p>
//                     <p><FontAwesomeIcon icon={faMobile} /> <span5>Mobile</span5> : +91 9790597137</p>
//                     <p><FontAwesomeIcon icon={faEnvelope} /> <span5>Email</span5> : jaasmedia@gmail.com</p>
//                     <p><FontAwesomeIcon icon={faLocationDot} /> <span5>Address</span5>:- Jass media (Karaikudi News) 98/8 , Navakala complex , 100 feet road , Karakudi-630003 Sivagangai District</p>
//                 </div>
//                 <div className="contact-privacy">
//                     <p>Privacy policy</p>
//                     <p>Terms & Conditions</p>
//                     <p>Refund</p>
//                 </div>
//             </div>
//             {/* Snackbar for displaying success message */}
//             <Snackbar
//                 open={open}
//                 autoHideDuration={6000}
//                 onClose={() => setOpen(false)}
//                 message="Email sent successfully!"
//                 severity="success"
//             />
//         </>
//     );
// };

// export default Contactus;

import React, { useRef } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.css';
import { faPhone , faMobile , faEnvelope , faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import './Contactus.css';

const BASE_URL=process.env.REACT_APP_BACKEND_URL;

const Contactus = () => {
  const formRef = useRef(null);

  const sendEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const response = await axios.post(`${BASE_URL}/send-email`, Object.fromEntries(formData));
      if (response.status === 200) {
        console.log("sucessfull")
        toast.success('Email sent successfully!');
        window.alert("Sent Successfully");
      } else {
        throw new Error('Failed to send email');
        window.alert("Error while processing");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      window.alert("Error while processing");
      toast.error('Failed to send email. Please try again later.');
    }
  };

  return (
      <>
          <div className="contactus"><h1>Contact us</h1></div>
          <div className="contact-outer">
              <div className="contact-form">
                  <form onSubmit={sendEmail} ref={formRef}>
                      <input placeholder='Name' type="text" id="name" name="name"  required />
                      <input placeholder='Email' type="email" id="email" name="email"  required />
                      <textarea placeholder='Message....' id="message" name="message" required />
                      <button type="submit" value="Send">Send</button>
                  </form>
              </div>
        <div className="contact-info">
            <p><FontAwesomeIcon icon={faPhone} /> <span5>Phone</span5> : +91 7200861688</p>
            <p><FontAwesomeIcon icon={faMobile} /> <span5>Mobile</span5> : +91 9790597137</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> <span5>Email</span5> : jaasmedia@gmail.com</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> <span5>Address</span5>:- Jass media (Karaikudi News) 98/8 , Navakala complex , 100 feet road , Karakudi-630003 Sivagangai District</p>
        </div>
        <div className="contact-privacy">
            <p>Privacy policy</p>
            <p>Terms & Conditions</p>
            <p>Refund</p>
        </div>
    </div>
    </>
  )
}

export default Contactus;