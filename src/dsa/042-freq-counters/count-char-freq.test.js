import { expect, test } from "vitest";
import { countCharFreq } from "./count-char-freq";

test("check counter", () => {
  expect(countCharFreq("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
});
