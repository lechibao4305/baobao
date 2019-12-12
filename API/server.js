const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const config = require("./DB.js");

const flash = require("connect-flash");

const session = require("express-session");

const MongoStore = require("connect-mongo")(session);

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const itemsRoute = require("./Items.route");
app.use("/items", itemsRoute);
const cartsRoute = require("./Items.route");
app.use("/sessions", cartsRoute);
//Login
const usersRoute = require("./UserRouter");
app.use("/users", usersRoute);
app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});
app.use(cookieParser());
app.use(
  session({
    secret: "this-is-a-secret-token",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    cookie: { maxAge: 1000 * 18 * 60 }
  })
);
app.use(flash());
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});
