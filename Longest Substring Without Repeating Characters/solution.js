/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const currentWindow = new Set();
  let longestLength = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    while (currentWindow.has(s[i])) {
      currentWindow.delete(s[left]);
      left++;
    }
    currentWindow.add(s[i]);
    longestLength = Math.max(longestLength, i - left + 1);
  }
  return longestLength;
};
