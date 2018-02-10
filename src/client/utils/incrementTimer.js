function incrementTimer(time) {
  let minutes = parseInt(time.substring(0, 2), 10);
  let seconds = parseInt(time.substring(3, 5), 10);

  if (seconds === 59) {
    minutes += 1;
    seconds = 0;
  } else {
    seconds += 1;
  }

  seconds = String(seconds);
  minutes = String(minutes);

  seconds = (seconds.length === 1 ? `0${seconds}` : seconds);
  minutes = (minutes.length === 1 ? `0${minutes}` : minutes);

  const newTime = `${minutes}:${seconds}`;

  return newTime;
}

module.exports = {
  incrementTimer,
};