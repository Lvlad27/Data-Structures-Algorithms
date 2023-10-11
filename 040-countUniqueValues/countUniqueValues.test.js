const countUniqueValues = require("./040-countUniqueValues");

test("Test 1", () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
});
test("Test 2", () => {
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
});
test("Test 3", () => {
  expect(countUniqueValues([])).toBe(0);
});
test("Test 4", () => {
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
});
