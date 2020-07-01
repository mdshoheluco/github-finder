import React from "react";
import spinner from "./spinner.gif";

const imageStyle = {
  width: "300px",
  margin: "auto",
  display: "block",
};

const Spinner = () => {
  return (
    <React.Fragment>
      <img src={spinner} alt="Loading..." style={imageStyle} />
    </React.Fragment>
  );
};

export default Spinner;
