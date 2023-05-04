//function will create a empty board with a 0 value
export const getEmptyBoard = () => [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  
  //function is to check if the matrix has a value
  export const hasValue = (board:number[][], value:number) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === value) {
          return true;
        }
      }
    }
    return false;
  };
  
  //function is to check if the board is full which has no 0 cell
  export const isFull = (board:number[][]) => {
    return !hasValue(board, 0);
  };
  
