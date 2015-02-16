function Game() {
  this.width = 500;
  this.height = 500;
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

  this.currentPlayer = 'x';
  this.drawGrid();
}

Game.prototype.handleClick = function(e) {
  var x = e.offsetX
      y = e.offsetY
   cell = new Cell(x, y)
   ttt  = new TicTacToe();

  if (this.currentPlayer == 'x') {
    if (cell.isEmpty()) {
      cells[cell.name] = 'x';
      cell.drawX(this.ctx);

      if (ttt.isWin('x', cells)) {
        localStorage['xScore']++;
        this.updateScore();
        if (confirm('X Wins. Play again?')) {
          return this.resetGrid();
        }
      }

      if (ttt.isDraw()) {
        if (confirm('Draw. Play again?')) {
          return this.resetGrid();
        }
      }

      this.currentPlayer = 'o';
    }
  } else {
    if (cell.isEmpty()) {
      cells[cell.name] = 'o';
      cell.drawO(this.ctx);

      if (ttt.isWin('o', cells)) {
        localStorage['oScore']++;
        this.updateScore();
        if (confirm('O Wins. Play again?')) {
          return this.resetGrid();
        }
      }

      if (ttt.isDraw()) {
        if (confirm('Draw. Play again?')) {
          return this.resetGrid();
        }
      }

      this.currentPlayer = 'x';
    }
  }
}

Game.prototype.updateScore = function() {
  $('#xscore').text(localStorage['xScore']);
  $('#oscore').text(localStorage['oScore']);
}
