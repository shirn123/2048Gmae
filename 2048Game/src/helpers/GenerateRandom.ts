import { isFull } from "./BoardManagement";

const Numberlist = [2,4]

//function will generate a random column index and row index from 0 to 4
const getRandomPosition = () => {
    const rowPosition = Math.floor(Math.random() * 4);
    const colPosition = Math.floor(Math.random() * 4);
    return [rowPosition, colPosition];
  };
  
 // function will receive the current board as an argument and return the new board which has 1 more cell in a random place. 
  export const generateRandom = (board:number[][]) => {
    if (isFull(board)) {
      return board;
    }
  
    let [row, col] = getRandomPosition();
    while (board[row][col] !== 0) {
        [row, col] = getRandomPosition();
    }
  
    const randomIndex = Math.floor(Math.random() * Numberlist.length);
    board[row][col] = Numberlist[randomIndex];
    
    return board;
  };

  
// function will receive empty board as an argument and return the start board with two tiles
  export const StartGame = (board:number[][]) => {

     if (isFull(board)) {
      return board;
    }
  
    for(let i=0; i < 2; i++){
      let [row, col] = getRandomPosition();
      while (board[row][col] !== 0) {
        [row, col] = getRandomPosition();
    }
    
    const randomIndex = Math.floor(Math.random() * Numberlist.length);
    board[row][col] = Numberlist[randomIndex];
  }
    return board;

  }
