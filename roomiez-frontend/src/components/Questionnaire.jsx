import React, { useEffect, useState } from "react";
import OptionCard from "./OptionCard";

const QuestionCard = ({ question, selected, setSelected }) => {

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + question.title[index]);
      index++;

      if (index >= question.title.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [question]);

  return (
    <div style={styles.card}>

      <span style={styles.tag}>HABITS</span>

      <h2 style={styles.question}>{displayedText}</h2>

      <p style={styles.subtitle}>{question.subtitle}</p>

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
    borderRadius: "18px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
    transform: "translateY(-5px)",
    transition: "all 0.3s ease"
  },

  tag: {
    background: "#FFE8E6",
    padding: "6px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    color: "#FF6F61"
  },

  question: {
    marginTop: "10px",
    minHeight: "40px"
  },

  subtitle: {
    color: "#777"
  },

  options: {
    marginTop: "25px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  }

};

export default QuestionCard;