import React, { Component } from "react";
import "../scss/styles.css";
import Datagrid from "./components/datagrid";
import Header from "./components/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      filterBylandSuccess: false,
      filterByReddit: false,
      filterByReused: false
    };
    this.handlefilterChanges = this.handlefilterChanges.bind(this);
    this.refreshHandler = this.refreshHandler.bind(this);
  }
  componentDidMount() {
    this.getLaunches();
  }

  getLaunches(queryString = null) {
    let url;
    if (queryString !== null) {
      url = `/launches${queryString}`;
    } else {
      url = "/launches";
    }
    fetch(url)
      .then(res => res.json())
      .then(launches => this.setState({ launches }));
  }
  handlefilterChanges(filter) {
    if (filter.id === "LAND SUCCESS") {
      this.setState({ filterBylandSuccess: filter.selected });
    }
    if (filter.id === "REUSED") {
      this.setState({ filterByReused: filter.selected });
    }
    if (filter.id === "WITH REDDIT") {
      this.setState({ filterByReddit: filter.selected });
    }
  }
  refreshHandler() {
    // get filters
    var params = {};
    if (this.state.filterBylandSuccess) {
      params.ls = true;
    }
    if (this.state.filterByReused) {
      params.reused = true;
    }
    if (this.state.filterByReddit) {
      params.reddit = true;
    }
    let queryString = Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&");
    if (queryString !== "") {
      queryString = "?" + queryString;
    } else {
      queryString = null;
    }
    this.getLaunches(queryString);
  }

  render() {
    return (
      <div id="app" className="page-wrapper">
        <h1>SpaceX Launches</h1>
        <Header
          selectHandler={this.handlefilterChanges}
          refreshHandler={this.refreshHandler}
        />
        <Datagrid data={this.state.launches} />
      </div>
    );
  }
}

export default App;
