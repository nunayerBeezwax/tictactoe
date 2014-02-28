var Player = {
  initialize: function(symbol) {
    this.symbol = symbol;
  },
  create: function(symbol) {
    var newPlayer = Object.create(Player);
    newPlayer.initialize(symbol);
    return newPlayer;
  }
};

var Space = {
  initialize: function(x, y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
  create: function(x, y) {
    var newSpace = Object.create(Space);
    newSpace.initialize(x, y);
    return newSpace;
  },
  markBy: function(Player) {
    this.markedBy = Player;
  }
};
var Board = {
  initialize: function() {
    this.spaces = [];
    this.createSpaces();
  },
  create: function() {
    var newBoard = Object.create(Board);
    newBoard.initialize();
    return newBoard;
  },
  createSpaces: function() {
    for (var x=1; x<=3; x++) {
      for (var y=1; y<=3; y++) {
        this.spaces.push(Space.create(x, y))
      }
    }
  }
};
var Game = {
  initialize: function(players, board) {
    this.players = [];
    this.board = [];

    this.players.push(Player.create('X'))
    this.players.push(Player.create('O'))
    for (var i=0; i<9; i++) {
    this.board.push(Board.initialize(i)) }
    console.log(this.players)
    console.log(this.board)
  }
};
