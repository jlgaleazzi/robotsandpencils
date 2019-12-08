const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LaunchesSchema = new mongoose.Schema({
  id: Number,
  badge: String, //mission_patch_small
  rocketName: String,
  rocketType: String,
  launchDate: Date,
  details: String,
  landSuccess: Boolean,
  reused: Boolean,
  reddit: Boolean,
  article: String
});

module.exports = mongoose.model("Launch", LaunchesSchema);
