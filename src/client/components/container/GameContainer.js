import React, { Component } from 'react';
import Game from '../presentational/Game';
import { selectBlock, uncoverBlocks, flagBlock } from '../../utils/turnHelpers';
import { getNewBoard } from '../../utils/boardHelpers';
import { incrementTimer } from '../../utils/incrementTimer';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[{}], [{}]],
      time: '00:00',
      isWinner: false,
      isLoser: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.incrementTimer = incrementTimer.bind(this);
    this.selectBlock = selectBlock.bind(this);
    this.uncoverBlocks = uncoverBlocks.bind(this);
    this.flagBlock = flagBlock.bind(this);
  }

  componentWillMount() {
    const board = getNewBoard('easy');
    this.setState({ board });
    this.startTimer();
  }

  resetTimer() {
    this.setState({ time: '00:00' });
  }

  startTimer() {
    this.timer = setInterval(() => {
      const currentTime = this.state.time;
      const newTime = incrementTimer(currentTime);
      this.setState({ time: newTime });
    }, 1000);
  }

  handleSubmit(e, difficulty) {
    e.preventDefault();
    const board = getNewBoard(difficulty);

    this.resetTimer();
    this.startTimer();

    this.setState({
      board,
      isWinner: false,
      isLoser: false,
    });
  }

  handleClick(e, block) {
    // if someone won or lost, don't let them click anymore
    if (this.state.isWinner || this.state.isLoser) return;
    // Get new board with updated state
    const updatededBoard = this.selectBlock(block, this.state.board);

    // set updated board
    this.setState({ board: updatededBoard });
  }

  handleContextMenu(e, block) {
    e.preventDefault();
    const updatededBoard = this.flagBlock(block, this.state.board);
    this.setState({ board: updatededBoard });
  }

  render() {
    return (
      <Game
        time={this.state.time}
        board={this.state.board}
        isWinner={this.state.isWinner}
        isLoser={this.state.isLoser}
        handleClick={this.handleClick}
        handleSubmit={this.handleSubmit}
        handleContextMenu={this.handleContextMenu}
      />
    );
  }
}

export default GameContainer;