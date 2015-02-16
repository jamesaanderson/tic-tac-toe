function Cell(x, y) {
  var cell;
  var cellX;
  var cellY;

  if (y <= 165) {
    cell = 'a';
    cellY = 0;
  } else if (y <= 330) {
    cell = 'b';
    cellY = 165;
  } else if (y <= 495) {
    cell = 'c';
    cellY = 330;
  }

  if (x <= 165) {
    cell += '1';
    cellX = 0;
  } else if (x <= 330) {
    cell += '2';
    cellX = 165;
  } else if (x <= 495) {
    cell += '3';
    cellX = 330;
  }

  this.name = cell;
  this.x = cellX;
  this.y = cellY;
}

Cell.prototype.drawX = function(ctx) {
  var cord = [[[this.x, this.y], [this.x+165, this.y+165]], [[this.x, this.y+165], [this.x+165, this.y]]];
  ctx.beginPath();

  for (var i = 0; i < 2; i++) {
    ctx.moveTo(cord[i][0][0], cord[i][0][1]);
    ctx.lineTo(cord[i][1][0], cord[i][1][1]);
  }

  ctx.stroke();
  ctx.closePath();
}

Cell.prototype.drawO = function(ctx) {
  ctx.beginPath();

  ctx.arc((this.x+165)-82.5, (this.y+165)-82.5, 82.5, 82.5, Math.PI*2, true);

  ctx.stroke();
  ctx.closePath();
}

Cell.prototype.isEmpty = function() {
  return cells[this.name] == '';
}
