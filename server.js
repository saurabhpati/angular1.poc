// Starts up the node server for the application. 
const express = require('express'),
    port = process.env.port || 8080;
let serverInitializer = require('./app.init.js');

const app = serverInitializer.initApp(express);
app.get('/', (request, response) => {
    response.render('index');
});

app.listen(port, () => {
    const host = 'localhost';
    console.log(`The app is listening at http://${host}:${port}`);
});