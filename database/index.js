const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect("mongodb://localhost:27017/spacex", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("succesfully connected to mongo database");
});

const launchesSchema = new mongoose.Schema({
  id: Number,
  badge: String,
  rocketName: String,
  rocketType: String,
  launchDate: Date,
  details: String,
  landSuccess: Boolean,
  reused: Boolean,
  reddit: Boolean,
  article: String
});
const Launches = mongoose.model("Launches", launchesSchema);

const getLaunches = (filters, callback) => {
  Launches.find(filters).then(res => {
    callback(null, res);
  });
};
module.exports = { getLaunches };
