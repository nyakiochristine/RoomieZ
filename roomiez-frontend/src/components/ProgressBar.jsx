import React from "react";

const ProgressBar = ({ step, total }) => {

  const percent = (step / total) * 100;

  return (
    <div className="progress-bar-container">

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>STEP {step} OF {total}</span>
        <span style={{ color: "#FF6F61", fontWeight: "bold" }}>
          {Math.round(percent)}%
        </span>
      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${percent}%`,
            background: "linear-gradient(90deg,#FF6F61,#F4C542,#4CAF50)"
          }}
        />

      </div>

      <p style={{ fontSize: "13px", color: "#999", marginTop: "6px" }}>
        Almost there! Just a few more questions.
      </p>

    </div>
  );
};

export default ProgressBar;