// Starts up the node server for the application. 
const express = require('express'),
    port = process.env.port || 8080,
    app = express();

app.use('/js', express.static('src/public/js'));
app.use('/css', express.static('src/public/css'));
app.use('/img', express.static('src/public/img'));
app.use('/fonts', express.static('src/public/fonts'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    const host = 'localhost';
    console.log(`The app is listening at http://${host}:${port}`);
});