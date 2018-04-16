import React from "react";
import "./characters.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    </div>
  </div>
);

export default CharacterCard;
