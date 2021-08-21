// LeetCode 85 (https://leetcode.com/problems/maximal-rectangle/)

var maximalRectangle = function(matrix) {
  if (!matrix.length) return 0;
  let heights = Array(matrix[0].length + 1).fill(0);
  let maxArea = 0;
  
  for (let row = 0; row < matrix.length; row++) {
    const stack = [];
    for (let idx = 0; idx < heights.length; idx++) {
      const curHeight = matrix[row][idx] && matrix[row][idx] === '1' ? heights[idx] + 1 : 0;
      heights[idx] = curHeight;
      
      while (stack.length && heights[stack[stack.length - 1]] > curHeight) {
        const prevHeight = heights[stack.pop()];
        const width = stack.length ? idx - stack[stack.length - 1] - 1 : idx;
        maxArea = Math.max(maxArea, prevHeight * width);
      }
      stack.push(idx);
    }
  }
  
  return maxArea;
};

const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(maximalRectangle(matrix));