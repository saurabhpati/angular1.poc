/* Initializes server components like:
 * 1. setting up of templating engine.
 * 2. serving up static files.
 * 3. Other contemporary tasks required for initialization of the server. */

const handlebars = require('express-handlebars');

// sets up the handlebars templating engine.
let _initHandlebars = (app) => {

    app.engine('.hbs', handlebars({
        extname: '.hbs',
        defaultLayout: 'index',
        layoutsDir: __dirname + '/src/app/views',
        partialsDir: __dirname + '/src/app/partials'
    }));
    
    app.set('views', './src/app/views');
    app.set('view engine', '.hbs');
}

// sets up the route to serve the static files.
let _serveStaticFiles = (app, express) => {

    app.use('/js', express.static('src/public/js'));
    app.use('/css', express.static('src/public/css'));
    app.use('/img', express.static('src/public/img'));
    app.use('/fonts', express.static('src/public/fonts'));
    app.use('/component', express.static('src/app/component'));
}

// The init module to be exported.
let init = (express) => {

    const app = express();
    _initHandlebars(app);
    _serveStaticFiles(app, express);
    return app;
}

module.exports.initApp = init;