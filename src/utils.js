export function isPalindrome(word) {
  // Convert to lowercase for case insensitivity
  const lowerWord = word.toLowerCase();
  // Reverse the word
  const reversed = lowerWord.split("").reverse().join("");
  // Check if it matches the original
  return lowerWord === reversed;
}
