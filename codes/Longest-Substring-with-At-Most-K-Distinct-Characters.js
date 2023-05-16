function findLongestString(s, k) {
  let startIdx = 0;
  let endIdx = 0;

  let hmap = []; // 計算目前有哪些字母了
  let charCount = 0; // 計算目前有幾種字母了

  let maxLeng = 0;

  while (endIdx < s.length) {
    const char = s[endIdx];

    if (!hmap[char]) {
      hmap[char] = 1;
      charCount++;
    }

    for (; charCount > k; ) {
      const firstChar = s[startIdx];
      hmap[firstChar] -= 1;

      if (hmap[firstChar] === 0) {
        charCount--;
      }
    }

    if (charCount <= k) {
      maxLeng = Math.max(maxLeng, endIdx - startIdx + 1);
    }

    endIdx++;
  }

  return maxLeng;
}
