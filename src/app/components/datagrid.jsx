import React from "react";
import ItemRenderer from "./itemRenderer";

const DataGrid = props => {
  return (
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
      {props.data.map((launch, i) => (
        <ItemRenderer key={i} data={launch} />
      ))}
      ;
    </div>
  );
};
export default DataGrid;
