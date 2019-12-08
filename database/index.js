const mongoose = require("mongoose");
const Launches = require("./models/launch.js");
const db = mongoose.connection;
const dbConfig = require("./config.js");
mongoose.connect(dbConfig.host, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("succesfully connected to mongo database");
});

const getLaunches = (filters, callback) => {
  Launches.find(filters).then(res => {
    callback(null, res);
  });
};
module.exports = { getLaunches };
