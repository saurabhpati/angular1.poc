// Starts up the node server for the application. 
const express = require('express'),
    port = process.env.port || 8080,
    app = express(),
    path = require('path');

app.use(express.static('./src'));
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname,'index.html'));
});

app.listen(port, () => {
    let host = 'localhost';
    console.log(`The app is listening at http://${host}:${port}`);
});
