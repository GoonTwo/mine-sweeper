import React from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';

const Options = ({ handleSubmit, value, handleChange, time }) => {
  return (
    <div className="options-container">
      <Timer time={time} />
      <form onSubmit={e => handleSubmit(e, value)}>
        <select value={value} onChange={e => handleChange(e)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input type="submit" value="start game" />
      </form>
    </div>
  );
};

Options.propTypes = {
  value: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Options;