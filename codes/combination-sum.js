var combinationSum = function (candidates, target) {
  function calc(remain, startIdx) {
    // 如果想看遞迴是如何迭代的可以打開這個註解
    // console.log("remain === " + remain, "idx: " + startIdx);

    if (remain === 0) {
      return true;
    }
    if (remain < 0) {
      return false;
    }

    for (let i = startIdx; i < candidates.length; i++) {
      if (calc(remain - candidates[i], i)) {
        return true;
      }
    }

    return false;
  }
  return calc(target, 0);
};
