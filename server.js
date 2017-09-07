// Starts up the node server for the application. 
const express = require('express'),
    port = process.env.port || 8080,
    app = express();

app.use(express.static('./src'));
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    const host = 'localhost';
    console.log(`The app is listening at http://${host}:${port}`);
});
