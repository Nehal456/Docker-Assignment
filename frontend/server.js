const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://flask-backend:5000';

app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));


app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy'
    });
});


app.post('/submit-form', async (req, res) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/process`,
            req.body
        );

        res.json(response.data);

    } catch (error) {
        console.error('Backend error:', error.message);

        res.status(500).json({
            error: 'Backend service error'
        });
    }
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Frontend running on port ${PORT}`);
    console.log(`Backend URL: ${BACKEND_URL}`);
});
