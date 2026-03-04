import React from "react";
import OptionCard from "./OptionCard";

const QuestionCard = ({ question, selected, setSelected }) => {

  if (!question) return null;

  return (
    <div style={styles.card}>

      <span style={styles.tag}>HABITS</span>

      <h2>{question.title}</h2>
      <p style={{ color: "#777" }}>{question.subtitle}</p>

      <div style={styles.options}>
        {question.options.map((opt) => (
          <OptionCard
            key={opt.value}
            option={opt}
            selected={selected}
            onSelect={setSelected}
          />
        ))}
      </div>

    </div>
  );
};

const styles = {
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },

  tag: {
    background: "#FFE8E6",
    padding: "5px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    color: "#FF6F61",
  },

  options: {
    marginTop: "25px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default QuestionCard;