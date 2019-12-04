const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const config = require('./DB.js');
const itemsRoute = require('./Items.route');
const flash = require('connect-flash');
const cartsRoute = require('./Items.route');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/items', itemsRoute);
app.use('/sessions', cartsRoute)
const UserRouter = require('./UserRouter');
app.use('/user', UserRouter)
const Paypal = require('../src/Component/Admin/adminpage/Paypal');
app.use('/paypal', Paypal)

app.listen(PORT, function () {
    console.log('Server is running on Port:', PORT);
});
app.use(cookieParser());
app.use(session({
    secret: 'this-is-a-secret-token',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),
}));
app.use(flash())
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
})