const app = require('express')(),
      port = process.env.port || 8080,
      server = app.listen(port, () => {
        const host = 'localhost';
        console.log(`The app is listening at http://${host}:${port}`);
    });

app.get('/', (request, response) => {
    response.send('Hello World!!');
});

