function calcShortestSubstring(nums, target) {
  let startIdx = 0;
  let endIdx = 0;
  let sum = 0;
  let minLen = 999999999;
  let minStr = "";

  for (; endIdx < nums.length; endIdx++) {
    sum += nums[endIdx];

    for (; sum > target; ) {
      sum -= nums[startIdx];
      startIdx++;
    }

    if (sum === target && minLen > endIdx - startIdx + 1) {
      minLen = Math.min(endIdx - startIdx + 1);
      minStr = nums.slice(startIdx, endIdx + 1);
    }
  }

  return minStr;
}
