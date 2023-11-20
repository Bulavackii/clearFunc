const getHealthStatus = require('./index');

test('returns "healthy" when health is more than 50', () => {
  const character = { name: 'Mage', health: 90 };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('returns "wounded" when health is between 15 and 50 (inclusive)', () => {
  const character = { name: 'Mage', health: 30 };
  expect(getHealthStatus(character)).toBe('wounded');
});

test('returns "critical" when health is less than 15', () => {
  const character = { name: 'Mage', health: 10 };
  expect(getHealthStatus(character)).toBe('critical');
});
