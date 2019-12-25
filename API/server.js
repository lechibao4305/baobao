const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const config = require("./DB.js");

const flash = require("connect-flash");

const session = require("express-session");

const MongoStore = require("connect-mongo")(session);

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
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
const cartsRoute = require("./Carts.route");
app.use("/cart", cartsRoute);
//Login vs Register
const Users = require("./Users.route");
app.use("/users", Users);

app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    }
  })
);
app.use(flash());
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});
app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});
