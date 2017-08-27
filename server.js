// Starts up the node server by serving the host index.html which is the main page of the application.
const express = require('express'),
    app = express();
    port = process.env.port || 8080,
    fs = require('fs');

// This is to serve public js files.
app.use('/js', express.static('src/public/js'));
app.use('/css', express.static('src/public/css'));
app.use('/img', express.static('src/public/img'));
app.use('/fonts', express.static('src/public/fonts'));

app.get('/', (request, response) => {
    fs.createReadStream('./index.html').pipe(response);
});

app.listen(port, () => {
    const host = 'localhost';
    console.log(`The app is listening at http://${host}:${port}`);
});