import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={(e) => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showInfo ? info : ""}</p>
    </div>
  );
};

export default Question;
