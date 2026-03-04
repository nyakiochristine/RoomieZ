import React from "react";

const TipBox = () => {
  return (
    <div style={styles.box}>
      <strong>Why do we ask this?</strong>
      <p>
        Mismatched cleanliness standards are the #1 cause of roommate conflicts.
        We pair similar habits to improve compatibility.
      </p>
    </div>
  );
};

const styles = {
  box: {
    marginTop: "20px",
    padding: "15px",
    background: "#FFF5E8",
    borderRadius: "10px",
    fontSize: "14px",
  },
};

export default TipBox;