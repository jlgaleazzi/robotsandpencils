import React, { Component } from "react";
import placeHolder from "../../assets/images/placeholder.png";

class ImageWithPlaceHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    this.handleLoad = this.handleLoad.bind(this);
  }
  handleLoad() {
    console.log("loaded image");
    this.setState({ loaded: true });
  }
  render() {
    let img;
    if (this.state.loaded) {
      img = <img className="badge" src={this.props.img} alt="badge"></img>;
    } else {
      img = (
        <div>
          <img className="badge" src={placeHolder} alt="badge"></img>
          <img
            src={this.props.img}
            style={{ visibility: "hidden" }}
            onLoad={this.handleLoad}
            alt="badge"
          ></img>
        </div>
      );
    }
    return <div className="launch-item-picture">{img}</div>;
  }
}
export default ImageWithPlaceHolder;
