var cells = {'a1': '', 'a2': '', 'a3': '',
             'b1': '', 'b2': '', 'b3': '',
             'c1': '', 'c2': '', 'c3': ''};

function Game(width, height) {
  this.width = width;
  this.height = height;
  this.canvas = $('canvas')[0];
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.ctx = this.canvas.getContext('2d');

  // x plays first
  this.currentPlayer = 'x';
}

Game.prototype.drawGrid = function() {
  var ctx = this.ctx;
  ctx.beginPath();
  ctx.lineWidth = 4;

  for (var i = 1; i <= 2; i++) {
    ctx.moveTo(166*i, 0);
    ctx.lineTo(166*i, this.width);
  }

  for (var i = 1; i <= 2; i++) {
    ctx.moveTo(0, 166*i);
    ctx.lineTo(this.width, 166*i);
  }

  ctx.stroke();
  ctx.closePath();
}

Game.prototype.resetGrid = function() {
  // Clear Canvas
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  // Clear Positions
  cells = {'a1': '', 'a2': '', 'a3': '',
           'b1': '', 'b2': '', 'b3': '',
           'c1': '', 'c2': '', 'c3': ''};

  this.drawGrid();
}

Game.prototype.handleClick = function(e) {
  var x = e.offsetX
      y = e.offsetY;
   cell = findCell(x, y)[0]
  cellX = findCell(x, y)[1]
  cellY = findCell(x, y)[2];

  if (this.currentPlayer == 'x') {
    cells[cell] = 'x';
    this.drawX(cellX, cellY);

    var ttt = new TicTacToe();
    if (ttt.isWin('x', cells)) {
      localStorage['xScore']++;
      this.updateScore();
      this.resetGrid();
    }

    this.currentPlayer = 'o';
  } else {
    cells[cell] = 'o';
    this.drawO(cellX, cellY);

    var ttt = new TicTacToe();
    if (ttt.isWin('o', cells)) {
      localStorage['oScore']++;
      this.updateScore();
      this.resetGrid();
    }

    this.currentPlayer = 'x';
  }
}

Game.prototype.drawX = function(cellX, cellY) {
  var ctx = this.ctx;
  var cord = [[[cellX, cellY], [cellX+165, cellY+165]], [[cellX, cellY+165], [cellX+165, cellY]]];
  ctx.beginPath();

  for (var i = 0; i < 2; i++) {
    ctx.moveTo(cord[i][0][0], cord[i][0][1]);
    ctx.lineTo(cord[i][1][0], cord[i][1][1]);
  }

  ctx.stroke();
  ctx.closePath();
}

Game.prototype.drawO = function(cellX, cellY) {
  var ctx = this.ctx;
  ctx.beginPath();

  ctx.beginPath();
  ctx.arc((cellX+165)-82.5, (cellY+165)-82.5, 82.5, 82.5, Math.PI*2, true);
  ctx.stroke();
  ctx.closePath();
}

Game.prototype.updateScore = function() {
  $('#xscore').text(localStorage['xScore']);
  $('#oscore').text(localStorage['oScore']);
}

function findCell(x, y) {
  var cell;
  var x;
  var y;

  if (y <= 165) {
    cell = 'a';
    y = 0;
  } else if (y <= 330) {
    cell = 'b';
    y = 165;
  } else if (y <= 495) {
    cell = 'c';
    y = 330;
  }

  if (x <= 165) {
    cell += '1';
    x = 0;
  } else if (x <= 330) {
    cell += '2';
    x = 165;
  } else if (x <= 495) {
    cell += '3';
    x = 330;
  }

  return [cell, x, y];
}
