const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());   // parse JSON bodies

// API endpoint that the frontend form will call
app.post('/submit-form', async (req, res) => {
    try {
        const formData = req.body;
        // Send the data to the Flask backend
        const backendResponse = await axios.post('http://backend:5000/process', formData);
        res.json(backendResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Backend error' });
    }
});

app.listen(PORT, () => {
    console.log(`Frontend server running on http://localhost:${PORT}`);
});