import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item && item === "X" ? "isX" : item === "O" ? "isO" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
