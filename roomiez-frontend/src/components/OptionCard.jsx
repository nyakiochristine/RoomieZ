import React from "react";

const OptionCard = ({ option, selected, onSelect }) => {

  const isSelected = selected === option.value;

  return (
    <div
      onClick={() => onSelect(option.value)}
      className={`option-card ${isSelected ? "option-selected" : ""}`}
    >

      <h4>{option.title}</h4>
      <p>{option.desc}</p>

    </div>
  );
};

export default OptionCard;