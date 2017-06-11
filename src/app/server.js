// Starts up the node server by serving the host index.html which is the main page of the application.

const express = require('express'),
    app = express();
    port = process.env.port || 8080,
    path = require('path'),
    fs = require('fs'),
    server = app.listen(port, () => {
        const host = 'localhost';
        console.log(`The app is listening at http://${host}:${port}`);
    });

let mainPagePath = path.join(__dirname + '/../public/index.html');
let angularPath = path.join(__dirname + '/../../node_modules/angular');

/*
Whenever a request is made for http://<host>:<port>/node_modules/angular, express will serve the request 
using the angular path in the local file.
*/ 
app.use('/node_modules/angular', express.static(angularPath));

/*
Whenever a request is made for http://<host>:<port>, express will serve the request using the mainPagePath
where index.html resides in the application.
*/
app.get('/', (request, response) => {
    fs.createReadStream(mainPagePath).pipe(response);
});

