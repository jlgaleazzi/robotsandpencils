process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const Launches = require("../database/launch.js");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server/server.js");
const should = chai.should();
const expect = require("chai").expect;
chai.use(chaiHttp);

describe("/GET all launches", () => {
  it("it Should GET all the launches", done => {
    chai
      .request(server)
      .get("/launches")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(83);
        done();
      });
  });
});

describe("/GET only successfully landed launches", () => {
  it("it should get all succesfully landed launches", done => {
    chai
      .request(server)
      .get("/launches?ls=true")
      .end((err, res) => {
        const launches = res.body;
        res.should.have.status(200);
        launches.should.be.a("array");
        launches.map(launch => {
          let ls = launch.landSuccess;
          expect(ls).to.be.true;
        });
        done();
      });
  });
});

describe("/GET only launches with reddit", () => {
  it("it should get all launches with reddit", done => {
    chai
      .request(server)
      .get("/launches?reddit=true")
      .end((err, res) => {
        const launches = res.body;
        res.should.have.status(200);
        launches.should.be.a("array");
        launches.map(launch => {
          let reddit = launch.reddit;
          expect(reddit).to.be.true;
        });
        done();
      });
  });
});

describe("/GET only launches with reuse", () => {
  it("it should get all launches with reuse", done => {
    chai
      .request(server)
      .get("/launches?reused=true")
      .end((err, res) => {
        const launches = res.body;
        res.should.have.status(200);
        launches.should.be.a("array");
        launches.map(launch => {
          let reused = launch.reused;
          expect(reused).to.be.true;
        });
        done();
      });
  });
});

describe("/GET only launches with reuse and reddit", () => {
  it("it should get all launches with reuse and reddit", done => {
    chai
      .request(server)
      .get("/launches?reused=true&reddit=true")
      .end((err, res) => {
        const launches = res.body;
        res.should.have.status(200);
        launches.should.be.a("array");
        launches.map(launch => {
          let reused = launch.reused;
          expect(reused).to.be.true;
          let reddit = launch.reddit;
          expect(reddit).to.be.true;
        });
        done();
      });
  });
});

describe("/GET only launches with reuse and land success", () => {
  it("it should get all launches with reuse and land success", done => {
    chai
      .request(server)
      .get("/launches?reused=true&ls=true")
      .end((err, res) => {
        const launches = res.body;
        res.should.have.status(200);
        launches.should.be.a("array");
        launches.map(launch => {
          let reused = launch.reused;
          expect(reused).to.be.true;
          let ls = launch.landSuccess;
          expect(ls).to.be.true;
        });
        done();
      });
  });
});

describe("/GET only launches with reddit and land success", () => {
  it("it should get all launches with reddit and land success", done => {
    chai
      .request(server)
      .get("/launches?reddit=true&ls=true")
      .end((err, res) => {
        const launches = res.body;
        res.should.have.status(200);
        launches.should.be.a("array");
        launches.map(launch => {
          let reddit = launch.reddit;
          expect(reddit).to.be.true;
          let ls = launch.landSuccess;
          expect(ls).to.be.true;
        });
        done();
      });
  });
});
