import React, { useReducer } from "react";
import Board from "./Board";
import { winner } from "../helpers";

const initalState = {
  board: Array(9).fill(null),
  isX: true,
};

const reducerGame = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, isX } = state;
      const { index, winners } = action.payload;
      if (winners || board[index]) return state;

      const newState = JSON.parse(JSON.stringify(state));
      newState.board[index] = isX ? "X" : "O";
      newState.isX = !isX;
      return newState;
    }

    case "RESET": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.board = Array(9).fill(null);
      newState.isX = true;
      return newState;
    }

    default:
      break;
  }
  return state;
};

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  const [state, dispatch] = useReducer(reducerGame, initalState);

  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   isX: true,
  // });

  const winners = winner(state.board);

  const handleClick = (index) => {
    // const newBoard = [...state.board];
    // if (winners || newBoard[index]) return;
    dispatch({
      type: "CLICK",
      payload: { index, winners },
    });
    // newBoard[index] = state.isX ? "X" : "O";
    // setState({
    //   ...state,
    //   board: newBoard,
    //   isX: !state.isX,
    // });
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winners ? <div className="game-winner">{winners} đã thắng </div> : ""}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
