import React, { Component } from "react";
import "../scss/styles.css";
import refresh from "../assets/images/refresh.svg";
import ItemRenderer from "./components/itemRenderer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      filters: {}
    };
  }
  componentDidMount() {
    this.getLaunches();
  }

  getLaunches() {
    fetch("/launches")
      .then(res => res.json())
      .then(launches => this.setState({ launches }));
  }

  render() {
    return (
      <div id="app" className="page-wrapper">
        <h1>SpaceX Launches</h1>
        <div className="header">
          <div className="refreshButton">
            <img alt="refresh" src={refresh} />
          </div>
          <div className="filterContainer">
            <label>
              {" "}
              <input type="checkbox" name="landSuccess" value="landSuccess" />
              LAND SUCCESS
            </label>
            <label>
              <input type="checkbox" name="reused" value="reused" />
              REUSED
            </label>
            <label>
              <input type="checkbox" name="reddit" value="reddit" />
              WITH REDDIT
            </label>
          </div>
        </div>
        <div id="results">
          <div className="results-header">
            <div className="launch-item-picture">
              <h2>Badge</h2>
            </div>
            <div className="launch-item-rocket-name">
              <h2>Rocket Name</h2>
            </div>
            <div className="launch-item-rocket-type">
              <h2>Rocket Type</h2>
            </div>
            <div className="launch-item-date">
              <h2>Launch Date</h2>
            </div>
            <div className="launch-item-details">
              <h2>Details</h2>
            </div>
            <div className="launch-item-id">
              <h2>ID</h2>
            </div>
            <div className="launch-item-link">
              <h2>Article</h2>
            </div>
          </div>
          {this.state.launches.map((launch, i) => (
            <ItemRenderer key={i} data={launch} />
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default App;
