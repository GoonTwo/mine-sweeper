import getColor from '../src/client/utils/getColor';

test('returns blue when there is 1 adjacent mines', () => {
  expect(getColor({ adjacentMines: 1 })).toBe('blue');
});

// Run additional tests on other possibilites...