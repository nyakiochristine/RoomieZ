import React, { useEffect, useState } from "react";
import OptionCard from "./OptionCard";

const QuestionCard = ({ question, selected, setSelected }) => {

  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {

    if (!question) return;

    let index = 0;
    setTypedTitle("");

    const typing = setInterval(() => {

      index++;

      setTypedTitle(question.title.slice(0, index));

      if (index === question.title.length) {
        clearInterval(typing);
      }

    }, 30);

    return () => clearInterval(typing);

  }, [question]);

  if (!question) return null;

  return (

    <div className="question-card slide-in">

      <span className="category-tag">HABITS</span>

      <h2 className="question-title">{typedTitle}</h2>

      <p className="question-subtitle">{question.subtitle}</p>

      <div className="options-grid">

        {question.options.map(opt => (
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

export default QuestionCard;