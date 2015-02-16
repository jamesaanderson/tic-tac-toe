var cells = {'a1': '', 'a2': '', 'a3': '',
             'b1': '', 'b2': '', 'b3': '',
             'c1': '', 'c2': '', 'c3': ''};

$(document).ready(function() {
  var game = new Game(500, 500);
  game.drawGrid();

  $('canvas').click(function(e) {
    game.handleClick(e)
  });

  if (localStorage['xScore']) {
    game.updateScore();
  } else {
    localStorage['xScore'] = 0;
    localStorage['oScore'] = 0;
  }
});
