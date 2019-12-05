const Path = require("path");
const fs = require("fs");
const Process = require("process");
const mongoose = require("mongoose");
const seedData = require("./seed-data.json");

mongoose.connect("mongodb://localhost:27017/spacex", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("succesfully connected to mongodb");
});
const launchesSchema = new mongoose.Schema({
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

const Launch = mongoose.model("Launch", launchesSchema);
const getSeedData = async () => {
  console.log("seeding mongodb database for spacex");
  return new Promise(resolve => {
    resolve(seedData);
  });
};

getSeedData().then(res => {
  let launches = [];
  res.map(l => {
    const reused = () => {
      return (
        l.rocket.first_stage.cores[0].reused ||
        l.rocket.second_stage.payloads[0].reused
      );
    };

    const reddit = () => {
      let keys = Object.keys(l.links);
      let has_reddit = false;
      keys.map(links => {
        if (links.indexOf("reddit_") !== -1 && l.links[links] !== null) {
          has_reddit = true;
        }
      });
      return has_reddit;
    };
    const launch = new Launch({
      id: l.flight_number,
      badge: l.links.mission_patch_small,
      rocketName: l.rocket.rocket_name,
      rocketType: l.rocket.rocket_type,
      launchDate: l.launch_date_utc,
      details: l.details,
      landSuccess: l.rocket.first_stage.cores[0].land_success === true,
      reused: reused(),
      reddit: reddit(),
      article: l.links.article_link
    });
    launches.push(launch);
  });
  Launch.insertMany(launches, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log("succesfully seeded db");
      process.exit();
    }
  });
});
