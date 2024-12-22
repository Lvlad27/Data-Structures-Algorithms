const validAnagram = require("./039-anagrams");

test("Test 1", () => {
  expect(validAnagram("", "")).toBe(true);
});
test("Test 2", () => {
  expect(validAnagram("aaz", "zza")).toBe(false);
});
test("Test 3", () => {
  expect(validAnagram("anagram", "nagaram")).toBe(true);
});
test("Test 4", () => {
  expect(validAnagram("rat", "car")).toBe(false);
});
test("Test 5", () => {
  expect(validAnagram("awesome", "awesom")).toBe(false);
});
test("Test 6", () => {
  expect(validAnagram("qwerty", "qeywrt")).toBe(true);
});
test("Test 7", () => {
  expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
});
test("Test 8", () => {
  expect(validAnagram(123, "abc")).toBe(false);
});
test("Test 9", () => {
  expect(validAnagram([], "abc")).toBe(false);
});
