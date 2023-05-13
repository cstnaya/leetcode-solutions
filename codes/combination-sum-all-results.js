var combinationSum = function (candidates, target) {
  const combination = [];

  function calc(remain, startIdx, ans) {
    if (remain === 0) {
      // 找到解就存起來
      combination.push(ans);
      return true;
    } else if (remain < 0) {
      return false;
    }

    for (let i = startIdx; i < candidates.length; i++) {
      const item = candidates[i];

      // [...ans, item] => 紀錄每次放了哪些元素
      calc(remain - item, i, [...ans, item]);
    }
  }
  calc(target, 0, []);

  return combination;
};
