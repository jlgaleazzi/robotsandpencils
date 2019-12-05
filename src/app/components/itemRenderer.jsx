import React from "react";
import link from "../../assets/images/link.svg";
import placeHolder from "../../assets/images/placeholder.png";

const ItemRenderer = props => {
  return (
    <div className="item-renderer">
      <div className="launch-item-picture">
        <img
          className="badge"
          src={props.data.badge !== null ? props.data.badge : placeHolder}
        />
      </div>
      <div className="launch-item-rocket-name">{props.data.rocketName}</div>
      <div className="launch-item-rocket-type">{props.data.rocketType}</div>
      <div className="launch-item-date">{props.data.launchDate}</div>
      <div className="launch-item-details">{props.data.details}</div>
      <div className="launch-item-id">{props.data.id}</div>
      <div className="launch-item-link">
        <img className="links" src={link} />
      </div>
    </div>
  );
};
export default ItemRenderer;
