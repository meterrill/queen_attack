var queenAttack = function(queenPosition, targetPosition) {
  if ((queenPosition[1] === targetPosition[1]) ||
    (queenPosition[0] === targetPosition[0]) ||
    (Math.abs(queenPosition[0] - targetPosition[0]) === Math.abs(queenPosition[1] - targetPosition[1]))) {
    return true;
  } else {
    return false;
  };
};

$(document).ready(function() {

  $("form#queen-attack").submit(function(event) {
    var queenX = parseInt($("input#queen-x-position").val());
    var queenY = parseInt($("input#queen-y-position").val());
    var targetX = parseInt($("input#target-x-position").val());
    var targetY = parseInt($("input#target-y-position").val());

    var queenPosition = [];
    var targetPosition = [];

    queenPosition.push(queenX, queenY);
    targetPosition.push(targetX, targetY);

    var orders = queenAttack(queenPosition, targetPosition);

    if (orders === true) {
      $(".orders").text("Fire away!");
    } else {
      $(".orders").text("Hold your fire!");
    };

  event.preventDefault();
  });
});
