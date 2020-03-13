import React from "react";

const Button = props => {
  return (
    <div>
      <button className="btn" onClick={props.addonClick}>
        Click!
      </button>
    </div>
  );
};

export default Button;
