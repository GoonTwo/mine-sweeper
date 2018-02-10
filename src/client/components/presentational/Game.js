import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import OptionsContainer from '../container/OptionsContainer';
import Winner from './Winner';
import Loser from './Loser';

const Game = ({ board, handleSubmit, handleClick, time, isWinner, isLoser, handleContextMenu }) => (
  <div className="game-container">
    <OptionsContainer
      handleSubmit={handleSubmit}
      time={time}
    />
    <Board
      board={board}
      handleClick={handleClick}
      handleContextMenu={handleContextMenu}
    />
    {isWinner ? <Winner /> : ''}
    {isLoser ? <Loser /> : ''}
  </div>
);

Game.propTypes = {
  time: PropTypes.string.isRequired,
  isLoser: PropTypes.bool.isRequired,
  isWinner: PropTypes.bool.isRequired,
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleContextMenu: PropTypes.func.isRequired,
};

export default Game;