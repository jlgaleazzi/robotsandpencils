import React from "react";
import refresh from "../../assets/images/refresh.svg";
import Checkbox from "./checkbox";

const Header = props => {
  return (
    <div className="header">
      <div className="refresh-button" onClick={props.refreshHandler}>
        <img className="refresh-img" alt="refresh" src={refresh} />
      </div>
      <div className="filter-container">
        <Checkbox label="LAND SUCCESS" selectHandler={props.selectHandler} />
        <Checkbox label="REUSED" selectHandler={props.selectHandler} />
        <Checkbox label="WITH REDDIT" selectHandler={props.selectHandler} />
      </div>
    </div>
  );
};

export default Header;
