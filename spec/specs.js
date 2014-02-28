// beforeEach(function() {
//   Board.spaces = [];
// });

describe('Player', function() {
  describe('initialize', function() {
    it('is initialized with a symbol', function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
  describe('create', function() {
    it('creates a new Player object', function() {
      var testPlayer = Player.create('X');
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe('Space', function() {
  describe('initialize', function() {
    it('is initialized with an x and y coordinate', function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });
  describe('create', function() {
    it('creates a new Space object', function() {
      var testSpace = Space.create(1,2);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
  describe('markBy', function() {
    it('lets a player mark the space', function() {
      var testPlayer = Player.create('X');
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});
describe('Board', function() {
  describe('initialize', function() {
    it('creates 9 spaces when it is initialized', function() {
      var testBoard = Board.create(9);
      testBoard.spaces.length.should.equal(9);
      });
  });
  describe('create', function() {
    it('creates a board object', function() {
      var testBoard = Board.create(9);
      Board.isPrototypeOf(testBoard).should.equal(true)
    });
  });

  describe('createSpaces', function() {
    it('adds the locations to the spaces property of the Board', function() {
      var testBoard = Object.create(Board);
      testBoard.spaces =[];
      testBoard.createSpaces();
      testBoard.spaces.length.should.equal(9);
    });
    it('the spaces it creates should be space OBJECTS', function() {
      var testBoard = Object.create(Board);
      testBoard.spaces = [];
      testBoard.createSpaces();
      Space.isPrototypeOf(testBoard.spaces[0]).should.equal(true);
    });
  });
});
describe('Game', function() {
  describe('initialize', function() {
    it('activates a board and two players', function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.players.length.should.equal(2);
      testGame.board.length.should.equal(9);
    });
  });
});
