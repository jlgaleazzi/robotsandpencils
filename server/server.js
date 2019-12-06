const express = require("express");
const Path = require("path");
const port = 3001;
const db = require("../database");
const app = express();
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin. X-Requested-with, Content-Type, Accept"
  );
  next();
});

app.use(express.static(Path.join(__dirname, "../build")));
app.use(express.json());
app.listen(port, () => console.log(`Express listening on port ${port}`));

app.get("/launches", (req, res) => {
  filters = {};
  if (req.query.ls && String(req.query.ls).toLowerCase() === "true") {
    // use landSuccess filter
    filters.landSuccess = true;
  }
  if (req.query.reused && String(req.query.reused).toLowerCase() === "true") {
    // use reused filter
    filters.reused = true;
  }
  if (req.query.reddit && String(req.query.reddit).toLowerCase() === "true") {
    // use reddit filter
    filters.reddit = true;
  }
  db.getLaunches(filters, (err, results) => {
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = app;
