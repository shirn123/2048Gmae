import {hasValue} from '../helpers/BoardManagement'
import { moveLeft } from '../helpers/MoveLefs';
import { moveRight } from '../helpers/MoveRight';
import { moveDown, moveUp } from '../helpers/MoveUpDown';

// function will check if there is 2048 tile on the board
export const checkWin = (board:number[][]) => {
    if(hasValue(board, 2048)==true)
      return true;
  };
  
 // function detect whether 2 boards having different values or not
  const hasDiff = (board:number[][], updatedBoard:number[][]) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== updatedBoard[i][j]) {
          return true;
        }
      }
    }
    return false;
  };
  
 // function will check if the board is full with tiles that cant merge 
  export const isOver = (board:number[][]) => {
    if (hasDiff(board, moveLeft(board))) {
      return false;
    }
    if (hasDiff(board, moveRight(board))) {
      return false;
    }
    if (hasDiff(board, moveUp(board))) {
      return false;
    }
    if (hasDiff(board, moveDown(board))) {
      return false;
    }
    return true;
  };
  