// LeetCode 354 (https://leetcode.com/problems/russian-doll-envelopes/)

function maxEnvelopes(envelopes) {
  envelopes.sort((a, b) => a[0] - b[0]);
  const dp = new Array(envelopes.length).fill(1);
  let maximumEnvelopes = dp[0];
  
  for (let i = 1; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (canRussianDoll(envelopes[j], envelopes[i])){
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
    if (dp[i] > maximumEnvelopes) maximumEnvelopes = dp[i];
  }
  
  return maximumEnvelopes;
};

function canRussianDoll(envelope, refEnvelope) {
  return envelope[0] < refEnvelope[0] && envelope[1] < refEnvelope[1];
}