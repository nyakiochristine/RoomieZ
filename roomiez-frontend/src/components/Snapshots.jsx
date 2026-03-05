import React from "react";

const Snapshots = () => {

  return (

    <div style={styles.card}>

      <h3>Snapshots</h3>

      <div style={styles.grid}>

        <img src="https://picsum.photos/200?1" alt="room" />
        <img src="https://picsum.photos/200?2" alt="room" />
        <img src="https://picsum.photos/200?3" alt="room" />

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

  grid: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  }

};

export default Snapshots;