// Starts up the node server by serving the host index.html which is the main page of the application.
const express = require('express'),
    app = express();
    port = process.env.port || 8080,
    fs = require('fs');

app.use(express.static('src/public'));

app.get('/', (request, response) => {
    fs.createReadStream('./index.html').pipe(response);
});

app.listen(port, () => {
    const host = 'localhost';
    console.log(`The app is listening at http://${host}:${port}`);
});