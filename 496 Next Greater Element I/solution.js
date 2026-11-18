/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const resultArray = [];
  const results = new Map();
  const stack = [];

  for (let j = 0; j < nums2.length; j++) {
    while (stack.length > 0 && stack[stack.length - 1] < nums2[j]) {
      const previousNumber = stack.pop();
      results.set(previousNumber, nums2[j]);
    }
    stack.push(nums2[j]);
  }

  for (let i = 0; i < nums1.length; i++) {
    const nextGreater = results.get(nums1[i]);

    if (nextGreater === undefined) {
      resultArray.push(-1);
    } else {
      resultArray.push(nextGreater);
    }
  }
  return resultArray;
};
