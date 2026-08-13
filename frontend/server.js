const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

const backendUrl =
    process.env.BACKENDURL ||
    'http' + ':' + '//backend' + ':' + '5000';

app.post('/submit-form', async (req, res) => {
    try {
        const response = await axios.post(
            backendUrl + '/process',
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

app.listen(3000, '0.0.0.0', () => {
    console.log('Frontend running on port 3000');
    console.log('Backend URL: ' + backendUrl);
});k8s
