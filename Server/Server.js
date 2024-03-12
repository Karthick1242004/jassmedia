const express = require('express');
const cors = require('cors'); // Import the cors middleware
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 8000; // Choose a port that is not already in use

require('dotenv').config()

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email, // Your Gmail address
    pass:process.env.password , // Your Gmail password
  },
});

// Express route for handling form submissions
app.post('/send-email', (req, res) => {

    const { name, email, mobile, message } = req.body;
  console.log("hello")
    // Define mail options
    const mailOptions = {
      from: `${email}`,
      to: 'jassmediadatatransfer@gmail.com', // Change this to the recipient's email address
      subject: 'Message from Jass Media website',
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'An error occurred while sending the email' });
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).json({ message: 'Email sent successfully' });
      }
    });
  });

// Handle GET request to the root path
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
