import React from "react";
import "./Cell.css";

const Cell = ({ value = 0, index, setGrid }) => {
  const fixed = value;

  const handleChange = (e) => {
    setGrid(index, parseInt(e.target.value));
    e.preventDefault();
  };

  return (
    <div
      className="cell"
      style={{
        borderLeft: isLeftBorderThick(index) && "2px solid rgb(54, 54, 54)",
        borderTop: isTopBorderThick(index) && "2px solid rgb(54, 54, 54)",
        borderRight: isRightBorderThick(index) && "2px solid rgb(54, 54, 54)",
        borderBottom: isBottomBorderThick(index) && "2px solid rgb(54, 54, 54)",
      }}
    >
      {fixed ? (
        <span>
          <b>{value}</b>
        </span>
      ) : (
        <input type="number" onInput={handleChange} />
      )}
    </div>
  );
};

const isTopBorderThick = (value) => {
  return (
    (value >= 0 && value <= 8) ||
    (value >= 27 && value <= 35) ||
    (value >= 54 && value <= 62)
  );
};

const isBottomBorderThick = (value) => {
  return (
    (value >= 18 && value <= 26) ||
    (value >= 45 && value <= 53) ||
    (value >= 72 && value <= 80)
  );
};

const isLeftBorderThick = (value) => {
  return value % 3 === 0;
};

const isRightBorderThick = (value) => {
  return (value + 1) % 3 === 0;
};

export default Cell;
