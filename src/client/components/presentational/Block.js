import React from 'react';
import PropTypes from 'prop-types';
import getColor from '../../utils/getColor';

const Block = ({ block, handleClick, handleContextMenu }) => {
  const color = getColor(block);
  return (
    <td
      onClick={(e) => handleClick(e, block)}
      onContextMenu={(e) => handleContextMenu(e, block)}
      className={`${(block.isFlagged && !block.isActive) ? 'flagged' : ''}`}
    >
      <div
        className={`
          content 
          ${(block.isActive ? 'active' : 'inactive')} 
          ${(block.hasMine ? 'mine' : 'no-mine')}
          `}
        style={{ color }}
      >
        {(block.adjacentMines !== 0 && !block.hasMine) ? block.adjacentMines : ''}
      </div>
    </td>
  );
};

Block.propTypes = {
  block: PropTypes.instanceOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleContextMenu: PropTypes.func.isRequired,
};

export default Block;