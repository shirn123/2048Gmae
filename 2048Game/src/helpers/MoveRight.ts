import { getEmptyBoard } from "./BoardManagement";
import { moveLeft } from "./MoveLefs";

// function make the tiles reversed to the oher side
const reverse = (board:number[][]) => {
    const reverseBoard = getEmptyBoard();
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        reverseBoard[i][j] = board[i][board[i].length - 1 - j];
      }
    }
  
    return reverseBoard;
  };
  
  // function call when the user press the right button
  export const moveRight = (board:number[][]) => {
    const reversedBoard = reverse(board);
    const newBoard = moveLeft(reversedBoard);
    return reverse(newBoard);
  };