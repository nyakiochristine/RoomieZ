import React from "react";

const AboutCard = () => {

  return (

    <div style={styles.card}>

      <h3>About Me</h3>

      <p style={{ color: "#666" }}>
        Hey! I'm Sarah, a design student who loves coffee shops and indie music.
        I'm looking for a roommate who values a clean home and good vibes.
      </p>

      <div style={{ marginTop: "10px" }}>

        <span style={styles.tag}>Photography</span>
        <span style={styles.tag}>Hiking</span>
        <span style={styles.tag}>Art</span>
        <span style={styles.tag}>Cooking</span>

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

  tag: {
    background: "#FFE8E6",
    color: "#FF6F61",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "12px",
    marginRight: "6px"
  }

};

export default AboutCard;