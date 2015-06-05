const expect = require('chai').expect;
import Game from '../lib/game.js';
import Board from '../lib/board.js';
import $ from 'jquery';

describe('Game', function() {

  describe('Plays counter', function() {
    it('is 0 in initial state', function() {
      expect(Game.playsCounter).to.eq(0);
    });

    it('increments on each play', function() {
      // $('#squares').empty();
      // $('#circles').empty();
      $('.empty').click();
      expect(Game.playsCounter).to.eq(1);
    });

  });

  it('knows when game is over without a win', function() {
      $('#squares').empty();
      $('#circles').empty();
      Board.drawBoard();
    for(let i = 0; i < 43; i ++){
      $('.empty').click();
    }
    let game = Game.playsCounter;
    expect(Game.checkState()).to.eq(true);
  });
});

