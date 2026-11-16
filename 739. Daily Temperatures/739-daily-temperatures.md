# LeetCode 739 — Daily Temperatures

**Difficulty:** Medium  
**Language:** JavaScript  
**Status:** Accepted ✅

## My Approach

I originally solved this problem using nested `for` loops with a time complexity of **O(n²)**.

Although my original solution worked, I wanted to improve its efficiency after studying Big O notation in _Grokking Algorithms_.

## What I Learned

I discovered the concept of a **monotonic stack**, which was new to me.

Instead of repeatedly searching ahead for a warmer temperature, I could use a stack to keep track of the indices of days still waiting for a warmer temperature.

My approach was to:

1. Create an empty stack and a results array filled with zeros.
2. Loop through the temperatures.
3. Use a `while` loop to compare the current temperature with earlier temperatures represented by the stack.
4. Pop an index when a warmer temperature is found.
5. Calculate the waiting days using `i - previousIndex`.
6. Push the current index onto the stack.

## Results

- **Original complexity:** O(n²)
- **Improved complexity:** O(n)
- **Runtime:** 14 ms
- **Performance:** Beats 87.07% of JavaScript submissions

## My Takeaway

The biggest lesson was understanding that nested loops don't automatically mean O(n²). With a monotonic stack, each index is pushed once and popped at most once.

This exercise helped me move beyond simply making an algorithm work and towards understanding how to make it more efficient.

**Understand → Implement → Test → Improve.**
