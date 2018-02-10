import { getNewBoard, createBoard, getMineLocations, recordAdjacentMines } from '../src/client/utils/boardHelpers';

test('getNewBoard returns correct board with mines', () => {
  // hard code a correct board for 'easy'
  // check to make sure the function returs one with *Deep Equality*
});

test('createBoard returns correct empty board size', () => {
  // check to make sure returned board has is correct size and has correct number of mines
});

test('getMineLocations generates random mine locations', () => {
  // test for various number of mines
  // check to make sure the number of mines is correct and that there are no duplicates
});

test('recordAdjacentMines correclty identifies number of adjacent mines', () => {
  // pass in hard-coded board
  // verify that mutated board has correct adjacent mine values
});