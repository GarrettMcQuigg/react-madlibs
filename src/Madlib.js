import React from "react";

const Madlib = ({ noun1, noun2, adjective, color }) => {
  return (
    <div className="Madlib-container">
      <div>
        <p>
          There was a {noun1} {noun2} who loved a {adjective} {color}.
        </p>
      </div>
      <button className="restart-btn">Restart</button>
    </div>
  );
};

export default Madlib;
