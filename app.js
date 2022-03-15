function p(text) {
  console.log(text);
}

const PORT = process.env.PORT || 4000;

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://boiledpotatos:tomato1234@endgame.ttbgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbURI);

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  p("Index has been requested");
  //   res.send("Get to index has been acknowledged");
  res.sendFile("./public/index.html", { root: __dirname });
});
app.get("/index", (req, res) => {
  res.redirect("/");
});
app.get("/signup", (req, res) => {
  p("Register page has been requested here");
  //   res.send("Get for register page has been registered");
  res.sendFile("./public/register.html", { root: __dirname });
});
app.post("/signup", urlencodedParser, (req, res) => {
  p("Incoming form detected");
  //   p(req.body);
  //   p(req.params);
  p("\n\n");
  p(req.body.first_name);
  p(req.body.last_name);
  p(req.body.password);
  p(req.body.email);
  p("\n\n");
  res.redirect("/");
});
app.get("/login", (req, res) => {
  p("login request has been made");
  res.sendFile("./public/login.html", { root: __dirname });
});

app.use((req, res) => {
  res.send("404: Page not found!");
});
app.listen(PORT, () => {
  p("request has been made");
});
