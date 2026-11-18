# LeetCode 496 — Next Greater Element I

## My Approach

I approached this problem using a **monotonic stack**, building on what I learned from solving Daily Temperatures.

My goal was to find the next greater element for each number in `nums1` by first processing `nums2`.

## Design Decisions

1. **Monotonic Stack:** I used a decreasing stack to keep track of numbers waiting for a greater element. When a larger number appeared, I removed smaller numbers using `.pop()`.

2. **JavaScript Map:** I introduced a `Map` to store key-value pairs. The key represents the previous number, and the value represents its next greater element.

3. **Two Separate Loops:** I processed `nums2` first to build the Map, then iterated through `nums1` to retrieve the answers.

4. **Handling Missing Values:** If `.get()` returned `undefined`, I added `-1` to the result array.

5. **Returning the Result:** I used `.push()` to build the final array and returned it to LeetCode.

## Challenges and Lessons

- Understanding how to compare the current number with the top of the stack.
- Learning the difference between `.push()`, `.pop()`, `.set()` and `.get()`.
- Understanding variable scope and why declarations belong outside the loops.
- Recognizing that the Map must be populated before retrieving values.
- Learning how two data structures can work together efficiently.

## Complexity

- **Time:** O(N + M) — each input array is processed once, with each stack element pushed and popped at most once.
- **Space:** O(N + M) — for the Map, stack and result array.

## Outcome

**Accepted — LeetCode 496**

- Runtime: 1 ms — beats 97.90%
- Memory: 56.18 MB — beats 87.17%
- Optimal time complexity achieved.

## Key Takeaway

I reinforced my understanding of monotonic stacks and learned how to combine them with a JavaScript Map.

The biggest lesson was that **the order in which data is processed matters just as much as the individual operations**.

This exercise helped me move from understanding an algorithmic pattern to applying it to a new problem.
