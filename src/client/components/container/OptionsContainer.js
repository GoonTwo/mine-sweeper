import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Options from '../presentational/Options';

class OptionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'easy',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Options
        time={this.props.time}
        value={this.state.value}
        handleSubmit={this.props.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

OptionsContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
};

export default OptionsContainer;