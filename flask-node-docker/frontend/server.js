const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(_-path.dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,
        'views', 'index.html'
    ));

    app.listen(port, () => {
        console.log('Frontend running at http://localhost:${port}');
    }
    )
}) 