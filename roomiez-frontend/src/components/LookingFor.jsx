import React from "react";

const LookingFor = () => {

  return (

    <div style={styles.card}>

      <h3>Looking For</h3>

      <p style={{ color: "#777" }}>
        Friendly and respectful roommate who values a clean and peaceful environment.
      </p>

      <div style={{ marginTop: "10px" }}>

        <span style={styles.tag}>Clean</span>
        <span style={styles.tag}>Student</span>
        <span style={styles.tag}>Friendly</span>

      </div>

    </div>

  );

};

const styles = {

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
  },

  tag: {
    background: "#FFE8E6",
    color: "#FF6F61",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "12px",
    marginRight: "6px"
  }

};

export default LookingFor;