import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
  return (
    <div className="container-fluid p-0">
    <div className="seconds-counter bg-black d-flex justify-content-center align-items-center text-light">
      <i className="fa-regular fa-clock fa-3x item"></i>
      <div className="counter">
        <span className="item six">{props.numSix}</span>
        <span className="item five">{props.numFive}</span>
        <span className="item four">{props.numFour}</span>
        <span className="item three">{props.numThree}</span>
        <span className="item two">{props.numTwo}</span>
        <span className="item one">{props.numOne}</span>
      </div>
    </div>
  </div>
  );
};

SecondsCounter.propTypes = {
    numSix: PropTypes.number,
    numFive: PropTypes.number,
    numFour: PropTypes.number,
    numThree: PropTypes.number,
    numTwo: PropTypes.number,
    numOne: PropTypes.number,
}

export default SecondsCounter;
