function Game(width, height) {
  this.width = width;
  this.height = height;
  this.canvas = $('canvas')[0];
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.ctx = this.canvas.getContext('2d');

  this.columns = 2;
  this.rows = 2;
}

Game.prototype.drawGrid = function() {
  var ctx = this.ctx;
  ctx.beginPath();

  for (var i=1; i<=this.columns; i++) {
    ctx.moveTo(166*i, 0);
    ctx.lineTo(166*i, this.width);
  }

  for (var i=1; i<=this.rows; i++) {
    ctx.moveTo(0, 166*i);
    ctx.lineTo(this.width, 166*i);
  }

  ctx.stroke();
}

Game.prototype.handleClick = function() {
  alert('Clicked!');
}
