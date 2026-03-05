import React from "react";

const TipBox = ({ tip }) => {

  return (
    <div className="tip-box">

      <strong>Why do we ask this?</strong>
      <p>{tip}</p>

    </div>
  );
};

export default TipBox;