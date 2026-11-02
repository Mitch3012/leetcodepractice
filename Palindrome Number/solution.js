/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let divisor = 1;
  let number = x;
  while (divisor <= number / 10) {
    divisor = divisor * 10;
  }
  while (divisor >= 10) {
    let lastDigit = number % 10;
    let firstDigit = Math.floor(number / divisor);
    if (firstDigit !== lastDigit) return false;
    number = Math.floor((number % divisor) / 10);
    divisor /= 100;
  }
  return true;
};
