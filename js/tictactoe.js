function TicTacToe() {
  this.wins = [['a1','a2','a3'],
               ['b1','b2','b3'],
               ['c1','c2','c3'],
               ['a1','b1','c1'],
               ['a2','b2','c2'],
               ['a3','b3','c3'],
               ['a1','b2','c3'],
               ['c1','b2','a3']];
}

TicTacToe.prototype.isWin = function(player) {
  for (i in this.wins) {
    var win = this.wins[i];

    if(cells[win[0]] + cells[win[1]] + cells[win[2]] == player + player + player) {
      return true;
    }
  }

  return false;
}

TicTacToe.prototype.isDraw = function() {
  for (i in this.wins) {
    var win = this.wins[i];

    if (cells[win[0]] == '' || cells[win[1]] == '' || cells[win[2]] == '') {
      return false;
    }
  }

  if (this.isWin() == false) {
    return true
  }
}
