const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Serve static files (HTML, CSS, JS)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle contact form submission
app.post('/contact', (req, res) => {
  const { fullName, email, phoneNumber, subject, message } = req.body;

  // Log the form data (you can replace this with email sending or database storage)
  const logEntry = `Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}\n\n`;
  fs.appendFile('contact_logs.txt', logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
      return res.status(500).json({ message: 'Error saving message' });
    }
    console.log('Contact form submitted:', logEntry);
    res.json({ message: 'Message sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
