// tasks.test.js
const { isTaskOverdue } = require('./tasks');

test('isTaskOverdue function should return true for overdue task', () => {
  const overdueDate = '2022-01-01';
  expect(isTaskOverdue(overdueDate)).toBe(true);
});

test('isTaskOverdue function should return false for upcoming task', () => {
  const upcomingDate = '2030-01-01';
  expect(isTaskOverdue(upcomingDate)).toBe(false);
});
