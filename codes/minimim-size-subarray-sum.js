function calcShortestSubstring(nums, target) {
  let startIdx = 0;
  let endIdx = 0;
  let sum = 0;
  let minLen = 999999999;

  for (; endIdx < nums.length; endIdx++) {
    sum += nums[endIdx];

    for (; sum >= target; ) {
      minLen = Math.min(minLen, endIdx - startIdx + 1);

      sum -= nums[startIdx];
      startIdx++;
    }
  }

  return minLen === 999999999 ? 0 : minLen;
}
