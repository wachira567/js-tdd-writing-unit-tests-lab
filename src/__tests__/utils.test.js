import { isPalindrome } from "../utils.js";

describe("isPalindrome", () => {
  test('returns true for a palindrome word like "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test('returns false for a non-palindrome word like "car"', () => {
    expect(isPalindrome("car")).toBe(false);
  });
});
