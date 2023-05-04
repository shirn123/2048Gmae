import { getEmptyBoard } from "./BoardManagement";

// function will change the board to look like like a mirror 
const compress = (board:number[][]) => {
    const newBoard = getEmptyBoard();
    for (let i = 0; i < board.length; i++) {
      let colIndex = 0;
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== 0) {
          newBoard[i][colIndex] = board[i][j];
          colIndex++;
        }
      }
    }
    return newBoard;
  };
  
// function will check if two tiles needs to merge
  const merge = (board:number[][]) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length - 1; j++) {
        if (board[i][j] !== 0 && board[i][j] === board[i][j + 1]) {
          board[i][j] = board[i][j] * 2;
          board[i][j + 1] = 0;
        }
      }
    }
  
    return board;
  };
  
// function will call when the user press the left button
  export const moveLeft = (board:number[][]) => {
    const newBoard1 = compress(board);
    const newBoard2 = merge(newBoard1);
    return compress(newBoard2);
  };