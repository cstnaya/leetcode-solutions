var combinationSum = function (candidates, target) {
  function calc(remain, startIdx, ans) {
    if (remain === 0) {
      // 找到解就回傳
      return ans;
    } else if (remain < 0) {
      return false;
    }

    for (let i = startIdx; i < candidates.length; i++) {
      const item = candidates[i];

      // [...ans, item] => 紀錄每次放了哪些元素
      if ((combination = calc(remain - item, i, [...ans, item])) !== false) {
        return combination;
      }
    }
  }
  return calc(target, 0, []);
};
