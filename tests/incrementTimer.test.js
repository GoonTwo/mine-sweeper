import { incrementTimer } from '../src/client/utils/incrementTimer';

test('increments time by one', () => {
  expect(incrementTimer('00:00')).toBe('00:01');
});

test('increments to next minute at 59 seconds', () => {
  expect(incrementTimer('03:59')).toBe('04:00');
});

// test further edge cases....