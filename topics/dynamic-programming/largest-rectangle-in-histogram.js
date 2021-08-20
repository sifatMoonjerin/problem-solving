// LeetCode 84 (https://leetcode.com/problems/largest-rectangle-in-histogram/)

var largestRectangleArea = function(heights) {
  const stackLeft = [];
  const leftLimits = Array(heights.length).fill(0);
  
  for (let idx = 0; idx < heights.length; idx++) {
    while (stackLeft.length) {
      if (heights[stackLeft[stackLeft.length - 1]] < heights[idx]) break;
      stackLeft.pop();
    }
    
    leftLimits[idx] = stackLeft.length ? stackLeft[stackLeft.length - 1] + 1 : 0;
    stackLeft.push(idx);
  }
  
  let largest = 0;
  const stackRight = [];
  
  for (let idx = heights.length - 1; idx >= 0; idx--) {
    while (stackRight.length) {
      if (heights[stackRight[stackRight.length - 1]] < heights[idx]) break;
      stackRight.pop();
    }
    
    const rightLimit =  stackRight.length ? stackRight[stackRight.length - 1] - 1 : heights.length - 1;
    stackRight.push(idx);
    
    const rect = heights[idx] * (rightLimit - leftLimits[idx] + 1);
    largest = Math.max(largest, rect);
  }
  
  return largest;
};