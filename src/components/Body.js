import React, { useState } from "react";
import Cell from "./Cell";
import "./Body.css";

const Body = () => {
  const [grid, setGrid] = useState(
    Array.from(Array(9), () => new Array(9).fill(0))
  );

  const handleSetGrid = (index, value) => {
    let updatedGrid = grid;
    updatedGrid[Math.floor(index / 9)][index % 9] = value;
    setGrid(updatedGrid);
  };

  const handleLoadSampleSudoku = (e) => {
    setGrid(getSampleSudoku());
    e.preventDefault();
  };

  return (
    <>
      <button onClick={handleLoadSampleSudoku}>{"Load Sample Sudoku"}</button>
      <div className="body">
        <div className="gridContainer">
          {grid
            .toString()
            .split(",")
            .map((value, index) => (
              <Cell
                value={parseInt(value)}
                key={index}
                index={index}
                setGrid={handleSetGrid}
              />
            ))}
        </div>
      </div>
    </>
  );
};

const getSampleSudoku = () => {
  return [
    [4, 0, 5, 7, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 2, 0, 9, 0],
    [8, 9, 0, 0, 0, 0, 0, 3, 7],
    [1, 2, 4, 8, 9, 0, 6, 7, 0],
    [9, 6, 0, 2, 7, 4, 5, 1, 0],
    [0, 0, 0, 0, 0, 3, 8, 4, 0],
    [3, 0, 9, 0, 2, 6, 0, 0, 0],
    [0, 5, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 9, 5, 0, 0, 6, 0],
  ];
};

// const getSum = (arr) => arr.reduce((a, b) => a + b, 0);

export default Body;
