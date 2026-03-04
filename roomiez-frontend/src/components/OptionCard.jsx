import React from "react";

const OptionCard = ({ option, selected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(option.value)}
      style={{
        ...styles.card,
        border: selected === option.value ? "2px solid #FF6F61" : "1px solid #ddd",
      }}
    >
      <h4>{option.title}</h4>
      <p>{option.desc}</p>
    </div>
  );
};

const styles = {
  card: {
    padding: "20px",
    borderRadius: "12px",
    cursor: "pointer",
    width: "200px",
    textAlign: "center",
    background: "white",
  },
};

export default OptionCard;