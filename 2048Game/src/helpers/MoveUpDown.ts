import { getEmptyBoard } from "./BoardManagement";
import { moveLeft } from "./MoveLefs";

//function will Rotate the board -90deg to the left
const rotateLeft = (board: number[][]) => {
    const rotateBoard = getEmptyBoard();
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        rotateBoard[i][j] = board[j][board[i].length - 1 - i];
      }
    }
  
    return rotateBoard;
  };
  
  //function will Rotate the board -90deg to the right
  const rotateRight = (board:number[][]) => {
    const rotateBoard = getEmptyBoard();
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        rotateBoard[i][j] = board[board[i].length - 1 - j][i];
      }
    }
  
    return rotateBoard;
  };

  // function call when the user press the up button
  export const moveUp = (board:number[][]) => {
    const rotateBoard = rotateLeft(board);
    const newBoard = moveLeft(rotateBoard);
    return rotateRight(newBoard);
  };
  
  // function call when the user press the down button
  export const moveDown = (board:number[][]) => {
    const rotateBoard = rotateRight(board);
    const newBoard = moveLeft(rotateBoard);
    return rotateLeft(newBoard);
  };