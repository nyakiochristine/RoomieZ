import React from "react";

const LifestyleCard = ({ answers }) => {

  return (

    <div style={styles.card}>

      <h3>Lifestyle & Preferences</h3>

      <div style={styles.grid}>

        <div style={styles.item}>
          🌙 Sleep: {answers.sleepSchedule || "Not set"}
        </div>

        <div style={styles.item}>
          🧹 Cleanliness: {answers.cleanliness || "Not set"}
        </div>

        <div style={styles.item}>
          🔊 Noise: {answers.noiseTolerance || "Not set"}
        </div>

        <div style={styles.item}>
          👥 Guests: {answers.socialLevel || "Not set"}
        </div>

        <div style={styles.item}>
          🚭 Smoking: {answers.smoking ? "Yes" : "No"}
        </div>

        <div style={styles.item}>
          🧠 Personality: {answers.introversion || "Not set"}
        </div>

      </div>

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

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginTop: "10px"
  },

  item: {
    background: "#F9F9F9",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "14px"
  }

};

export default LifestyleCard;