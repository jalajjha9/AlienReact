const express = require("express");
const bodyParser = require("body-parser");
const createError = require("http-errors");
// const dotenv = require("dotenv").config();
const config = require("./config").get("dev");

const port = config.port;
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// calling the routes
app.use("/", require("./router"));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(port, () => {
    console.log(`Node server listening on port ${port}`);
  })
  .on("error", (err) => {
    console.log(`Port listen error - ${err}`);
  });

module.exports = app;
