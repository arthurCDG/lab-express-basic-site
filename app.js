const express = require("express");
const app = express();
const PORT = 4000;
const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home.hbs", { css: ["home.css"], title: ["Home"] });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", { css: ["about.css"], title: ["About"] });
});

app.get("/works", (req, res) => {
  res.render("works.hbs", { css: ["works.css"], title: ["Works"] });
});

app.get("/gallery", (req, res) => {
  res.render("gallery.hbs", { css: ["gallery.css"], title: ["Gallery"] });
});

app.listen(PORT);
