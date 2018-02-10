const getMineLocations = (boardSize, numMines) => {
  const mineLocations = new Set();

  while (mineLocations.size < numMines) {
    const row = Math.floor(Math.random() * boardSize);
    const column = Math.floor(Math.random() * boardSize);
    mineLocations.add([row, column]);
  }
  return mineLocations;
};

const recordAdjacentMines = (board) => {
  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      let adjacentMines = 0;

      // check above and below for mines
      if (board[rowIndex + 1] && board[rowIndex + 1][colIndex].hasMine) adjacentMines += 1;
      if (board[rowIndex - 1] && board[rowIndex - 1][colIndex].hasMine) adjacentMines += 1;

      // check left and right for mines
      if (board[rowIndex][colIndex + 1] && board[rowIndex][colIndex + 1].hasMine) adjacentMines += 1;
      if (board[rowIndex][colIndex - 1] && board[rowIndex][colIndex - 1].hasMine) adjacentMines += 1;

      // check diagonal down left and down right for mines
      if (board[rowIndex + 1] && board[rowIndex + 1][colIndex + 1] && board[rowIndex + 1][colIndex + 1].hasMine) adjacentMines += 1;
      if (board[rowIndex + 1] && board[rowIndex + 1][colIndex - 1] && board[rowIndex + 1][colIndex - 1].hasMine) adjacentMines += 1;

      // check diagonal up left and up right for mines
      if (board[rowIndex - 1] && board[rowIndex - 1][colIndex + 1] && board[rowIndex - 1][colIndex + 1].hasMine) adjacentMines += 1;
      if (board[rowIndex - 1] && board[rowIndex - 1][colIndex - 1] && board[rowIndex - 1][colIndex - 1].hasMine) adjacentMines += 1;

      // assign number of adjacent mines to current spot
      board[rowIndex][colIndex].adjacentMines = adjacentMines;
    });
  });
};

const createBoard = (boardSize, numMines) => {

  // get random mine locations
  const mineLocations = getMineLocations(boardSize, numMines);

  // create new array and fill it with sub-arrays full of default objects
  const board = new Array(boardSize)
    .fill(null)
    .map((x, rowIndex) => new Array(boardSize)
      .fill(null)
      .map((x, colIndex) => {
        return {
          adjacentMines: 0,
          row: rowIndex,
          col: colIndex,
          hasMine: false,
          isActive: false,
          isFlagged: false,
        };
      }));

  // assign mines to appropriate spots
  mineLocations.forEach((location) => {
    const row = location[0];
    const column = location[1];
    board[row][column].hasMine = true;
  });

  // record how many adjacent mines each spot has (mutate board array)
  recordAdjacentMines(board);

  return board;
};

const getNewBoard = (difficulty) => {
  let board;

  if (difficulty === 'easy') {
    board = createBoard(10, 7);
  } else if (difficulty === 'medium') {
    board = createBoard(15, 25);
  } else {
    board = createBoard(20, 50);
  }

  return board;
};

module.exports = {
  getNewBoard,
  createBoard,
  getMineLocations,
  recordAdjacentMines,
};