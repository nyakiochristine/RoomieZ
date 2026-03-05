import React from "react";

const BudgetCard = ({ profile }) => {

  return (

    <div style={styles.card}>

      <h3>Budget Range</h3>

      <h2>
        ${profile?.budgetMin || 0} - ${profile?.budgetMax || 0}
      </h2>

      <p style={{ color: "#777" }}>per month</p>

      <p style={{ marginTop: "10px" }}>
        Room Type: {profile?.roomType || "Not specified"}
      </p>

    </div>

  );

};

const styles = {

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
  }

};

export default BudgetCard;