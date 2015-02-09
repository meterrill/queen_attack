var queenAttack = function(queenPosition, targetPosition) {
  if (
    (queenPosition[1] === targetPosition[1]) ||
    (queenPosition[0] === targetPosition[0]) ||
    (Math.abs(queenPosition[0] - targetPosition[0]) === Math.abs(queenPosition[1] - targetPosition[1]))) {
    return true;
  } else {
    return false;
  };
};
