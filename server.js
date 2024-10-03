const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' folder

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password' // Replace with your email password
    }
});

// Endpoint to handle email sending
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send({ error: 'Failed to send email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.send({ message: 'Email sent successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
