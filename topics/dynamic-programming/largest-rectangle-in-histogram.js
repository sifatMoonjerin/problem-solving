// LeetCode 84 (https://leetcode.com/problems/largest-rectangle-in-histogram/)

function largestRectangleArea(heights) {
  const stack = [];
  let largestArea = 0;
  const extendedHeights = heights.concat([0]);
  
  for (let idx = 0; idx < extendedHeights.length; idx++) {
    const currentHeight = extendedHeights[idx];
    while (stack.length && extendedHeights[stack[stack.length - 1]] > currentHeight) {
      const prevHeight = extendedHeights[stack.pop()];
      const width = stack.length ? idx - stack[stack.length - 1] - 1 : idx;
      largestArea = Math.max(largestArea, width * prevHeight);
    }
    stack.push(idx);
  }
  
  return largestArea;
};

const heights = [2,1,5,6,2,3];
console.log(largestRectangleArea(heights));