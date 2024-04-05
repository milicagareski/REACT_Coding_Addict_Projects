import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showText, setShowText] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setShowText(!showText);
          }}
        >
          {showText ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showText && <p>{info}</p>}
    </article>
  );
};

export default Question;
