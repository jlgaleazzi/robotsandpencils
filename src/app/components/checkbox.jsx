import React, { Component } from "react";
import checkmark from "../../assets/images/checkmark.svg";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      label: this.props.label
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({ selected: !this.state.selected });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.state.selected) {
      this.props.selectHandler({
        selected: this.state.selected,
        id: this.state.label
      });
    }
  }

  render() {
    let cm;
    if (this.state.selected) {
      cm = (
        <div className="checkbox" onClick={this.handleClick}>
          <img className="checkmark" src={checkmark} alt="" />
        </div>
      );
    } else {
      cm = <div className="checkbox" onClick={this.handleClick}></div>;
    }
    return (
      <div className="checkbox-container">
        {cm}
        <div className="checkmark-label">{this.state.label}</div>
      </div>
    );
  }
}

export default CheckBox;
