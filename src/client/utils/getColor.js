const getColor = ({ adjacentMines }) => {
  if (adjacentMines === 0) return 'blue';
  else if (adjacentMines === 1) return 'blue';
  else if (adjacentMines === 2) return 'green';
  else if (adjacentMines === 3) return 'red';
  else if (adjacentMines === 4) return 'violet';
  else if (adjacentMines === 5) return 'steelblue';
  else if (adjacentMines === 6) return 'brown';
  else if (adjacentMines === 7) return 'pink';
  else if (adjacentMines === 8) return 'red';
};

module.exports = getColor;