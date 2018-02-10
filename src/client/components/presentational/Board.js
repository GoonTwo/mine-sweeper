import React from 'react';
import PropTypes from 'prop-types';
import Block from '../presentational/Block';

const Board = ({ board, handleClick, handleContextMenu }) => {

  const rows = board.map((row, rowIndex) => {
    const blocks = row.map(block => <Block
      key={`${block.row}${block.col}`}
      handleClick={handleClick}
      block={block}
      handleContextMenu={handleContextMenu}
    />);
    return <tr key={`${rowIndex}`}>{blocks}</tr>;
  });

  return (
    <table>
      <tbody className="board-container">
        {rows}
      </tbody>
    </table>
  );
};

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleContextMenu: PropTypes.func.isRequired,
};

export default Board;