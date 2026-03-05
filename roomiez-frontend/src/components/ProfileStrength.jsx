import React from "react";

const ProfileStrength = () => {

  const strength = 70;

  return (

    <div style={styles.card}>

      <h3>Profile Strength</h3>

      <div style={styles.barBackground}>
        <div style={{ ...styles.barFill, width: `${strength}%` }}></div>
      </div>

      <p style={{ marginTop: "10px", color: "#777" }}>
        Your profile is {strength}% complete
      </p>

    </div>

  );

};

const styles = {

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    marginBottom: "20px"
  },

  barBackground: {
    height: "10px",
    background: "#eee",
    borderRadius: "10px",
    marginTop: "10px"
  },

  barFill: {
    height: "10px",
    borderRadius: "10px",
    background: "linear-gradient(90deg,#FF6F61,#66BB6A)"
  }

};

export default ProfileStrength;