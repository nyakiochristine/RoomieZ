import React from "react";

const ProgressBar = ({ step, total }) => {
  const percent = Math.round((step / total) * 100);

  return (
    <div style={{ marginBottom: "25px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontWeight: "600" }}>
          STEP {step} OF {total}
        </span>
        <span style={{ color: "#FF6F61", fontWeight: "600" }}>{percent}%</span>
      </div>

      <div style={styles.bar}>
        <div style={{ ...styles.fill, width: `${percent}%` }} />
      </div>
    </div>
  );
};

const styles = {
  bar: {
    height: "8px",
    background: "#eee",
    borderRadius: "5px",
    marginTop: "8px",
  },
  fill: {
    height: "8px",
    background: "linear-gradient(90deg,#FF6F61,#88B04B)",
    borderRadius: "5px",
  },
};

export default ProgressBar;