import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <div>
      <button className="btn" onClick={props.addonClick}>
        Click!
      </button>
    </div>
  );
};

Button.propTypes = {
  addonClick: PropTypes.func
};

export default Button;
