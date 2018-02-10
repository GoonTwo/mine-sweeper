import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ time }) => {
  return (
    <div className="timer-container">
      <div className="time">
        {time}
      </div>
    </div>
  );
};

Timer.propTypes = {
  time: PropTypes.string.isRequired,
};

export default Timer;