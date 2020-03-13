import React from "react";
import Button from "./Button";

const Card = props => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <h3>{props.text} </h3>
          <p style={{ marginTop: "10px" }}>Lorem ipsum drgw</p>
          <Button addonClick={props.add} />
        </div>
      </div>
    </div>
  );
};

export default Card;
