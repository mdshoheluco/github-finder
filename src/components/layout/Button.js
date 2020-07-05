import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onclick, type }) => {
  return (
    <React.Fragment>
      <button onClick={onclick} className={`btn btn-block btn-${type}`}>
        {text}
      </button>
    </React.Fragment>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "light",
};

export default Button;
