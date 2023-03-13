const path = require('path');
const express = require('express');
const methodOverride = require('method-override')
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(bodyParser.json())

const route = require('./routes');

const db = require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }));
app.use(express.json());

// app.get('/middleware',
//     function (req, res, next) {
//         if(['vevjp'].includes(req.query.id)) {
//             return next();
//         }
//         res.status(403).json({
//             message: 'Forbidden'
//         })
//     },
//     function (req, res, next) {
//         res.json({
//             message: 'success'
//         })
//     }
// )

app.use(methodOverride('_method'))

app.use(morgan('combined'));

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b 
        }
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
