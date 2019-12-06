import React from "react";
import link from "../../assets/images/link.svg";
import ImageWithPlaceHolder from "./imagewithplaceholder";

const ItemRenderer = props => {
  const date = new Date(props.data.launchDate);
  const options = { dateStyle: "short" };
  const dateString = date.toLocaleDateString("US-EN", options);
  return (
    <div className="item-renderer">
      <ImageWithPlaceHolder img={props.data.badge} />
      <div className="launch-item-rocket-name">{props.data.rocketName}</div>
      <div className="launch-item-rocket-type">{props.data.rocketType}</div>
      <div className="launch-item-date">{dateString}</div>
      <div className="launch-item-details">{props.data.details}</div>
      <div className="launch-item-id">{props.data.id}</div>
      <div className="launch-item-link">
        <a href={props.data.article} target="_blank">
          <img className="links" src={link} alt="article" />
        </a>
      </div>
    </div>
  );
};
export default ItemRenderer;
