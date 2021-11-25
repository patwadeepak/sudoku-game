import React, { useState } from "react";
import Cell from "./Cell";
import { checkSudokuSolution } from "../utility/SudokuSolutionChecker";
import "./Body.css";

const Body = () => {
  const [grid, setGrid] = useState(
    Array.from(Array(9), () => new Array(9).fill(0))
  );

  const [isSudokuCorrect, setIsSudokuCorrect] = useState(null);

  const handleCheckSudokuSolution = () => {
    setIsSudokuCorrect(checkSudokuSolution(grid));
  };

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
        <div className="status">
          <div>
            <div>
              {isSudokuCorrect === null
                ? ""
                : isSudokuCorrect
                ? "Correct"
                : "Incorrect"}
            </div>
            <button onClick={handleCheckSudokuSolution}>
              {"Check Sudoku Solution"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const getSampleSudoku = () => {
  return [
    [0, 0, 0, 4, 9, 0, 2, 0, 0],
    [0, 0, 6, 0, 1, 0, 0, 4, 7],
    [0, 0, 4, 0, 5, 0, 0, 9, 0],

    [6, 7, 0, 5, 0, 1, 4, 0, 0],
    [8, 0, 0, 0, 4, 0, 7, 0, 0],
    [5, 4, 9, 8, 0, 0, 3, 0, 6],

    [4, 1, 0, 9, 6, 0, 8, 0, 0],
    [0, 0, 0, 1, 0, 5, 9, 0, 4],
    [0, 2, 8, 0, 7, 0, 0, 6, 5],
  ];
};

export default Body;
