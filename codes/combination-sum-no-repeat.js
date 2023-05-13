var combinationSum = function (candidates, target) {
  function calc(remain, startIdx) {
    console.log("remain === " + remain, "idx: " + startIdx);

    if (remain === 0) {
      return true;
    }
    if (remain < 0 || startIdx === candidates.length) {
      return false;
    }

    for (let i = startIdx; i < candidates.length; i++) {
      if (calc(remain - candidates[i], i + 1)) {
        return true;
      }
    }

    return false;
  }
  return calc(target, 0);
};
