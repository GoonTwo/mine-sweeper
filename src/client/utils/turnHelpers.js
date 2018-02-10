function copyBoard(board) {
  // make copy of board
  return JSON.parse(JSON.stringify(board));
}

function selectBlock({ row, col }, board) {
  let newBoard = copyBoard(board);
  // select current block
  const selectedBlock = newBoard[row][col];
  // uncover current block
  this.uncoverBlocks(selectedBlock, newBoard);

  // check for winner or loser
  if (selectedBlock.hasMine) {
    newBoard = showBoard(newBoard);
    this.setState({ isLoser: true });
    clearInterval(this.timer);
  } else if (isWinner(newBoard)) {
    newBoard = showBoard(newBoard);
    this.setState({ isWinner: true });
    clearInterval(this.timer);
  }

  return newBoard;
}

function uncoverBlocks(block, board) {
  // activate current block
  block.isActive = true;
  // if block has no mines
  if (block.adjacentMines === 0 && !block.hasMine) {
    // get all inactive surrounding blocks
    const adjacentBlocks = getAdjacentBlocks(block, board);
    // activate all inactive surrounding blocks recursively
    adjacentBlocks.forEach(adjacentBlock => uncoverBlocks(adjacentBlock, board));
  }
}

function getAdjacentBlocks(block, board) {
  const { row, col } = block;
  const adjacentBlocks = [];

  // check above and below for inactive blocks
  if (board[row + 1] && board[row + 1][col].isActive === false) adjacentBlocks.push(board[row + 1][col]);
  if (board[row - 1] && board[row - 1][col].isActive === false) adjacentBlocks.push(board[row - 1][col]);

  // check left and right for inactive blocks
  if (board[row][col + 1] && board[row][col + 1].isActive === false) adjacentBlocks.push(board[row][col + 1]);
  if (board[row][col - 1] && board[row][col - 1].isActive === false) adjacentBlocks.push(board[row][col - 1]);

  // check diagonal down left and diagonal down right for inactive blocks
  if (board[row + 1] && board[row + 1][col + 1] && board[row + 1][col + 1].isActive === false) adjacentBlocks.push(board[row + 1][col + 1]);
  if (board[row + 1] && board[row + 1][col - 1] && board[row + 1][col - 1].isActive === false) adjacentBlocks.push(board[row + 1][col - 1]);

  // check diagonal up left and diagonal up right for inactive blocks
  if (board[row - 1] && board[row - 1][col + 1] && board[row - 1][col + 1].isActive === false) adjacentBlocks.push(board[row - 1][col + 1]);
  if (board[row - 1] && board[row - 1][col - 1] && board[row - 1][col - 1].isActive === false) adjacentBlocks.push(board[row - 1][col - 1]);

  return adjacentBlocks;
}

function isWinner(board) {
  const { length } = board;
  // check every spot to see if there are any with no mines
  //  that haven't been played yet (i.e. there are still places to play)
  for (let rowIndex = 0; rowIndex < length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < length; colIndex += 1) {
      if (!board[rowIndex][colIndex].hasMine && !board[rowIndex][colIndex].isActive) {
        return false;
      }
    }
  }
  return true;
}

function showBoard(board) {
  const newBoard = copyBoard(board);

  // loop through and set all blocks to active
  for (let rowIndex = 0; rowIndex < newBoard.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < newBoard.length; colIndex += 1) {
      newBoard[rowIndex][colIndex].isActive = true;
    }
  }
  return newBoard;
}

function flagBlock({ row, col }, board) {
  // copy board
  const newBoard = copyBoard(board);
  // select current block
  const selectedBlock = newBoard[row][col];
  // flip whether or not the block is flagged
  selectedBlock.isFlagged = !selectedBlock.isFlagged;

  return newBoard;
}

module.exports = {
  copyBoard,
  selectBlock,
  uncoverBlocks,
  getAdjacentBlocks,
  flagBlock,
};

