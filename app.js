function p(text) {
  console.log(text);
}

const PORT = process.env.PORT || 4000;

const express = require("express");
const app = express();

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
app.post("/signup", (req, res) => {
  p("Incoming form detected");
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
