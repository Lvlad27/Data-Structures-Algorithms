import { anagramChecker } from "./anagram-check";
import { expect, test } from "vitest";

test("check anagram", () => {
  expect(anagramChecker("hello", "world")).toBe(false);
});
test("check anagram", () => {
  expect(anagramChecker("listen", "silent")).toBe(true);
});
test("check anagram", () => {
  expect(anagramChecker("cat", "Act")).toBe(true);
});
