const arr = [
  [1, 4, 66, 15],
  [33, 5, 62, 44],
  [1, 567, 23, 17],
  [0, 5, 234, 999],
];

function getArray(arr) {
  // 總共應走步數
  const total = arr.length * arr[0].length;

  // 輸出結果
  const result = [];

  // 目前步數
  let step = 0;

  // 目前所在位置
  let row = 0;
  let col = 0;

  // 第幾圈
  let stack = 1;

  // 步數到達陣列數量停止
  while (step < total) {
    // go to right
    // 走到橫列的倒數第 stack 個就停止
    while (col < arr[0].length - stack) {
      result.push(arr[row][col++]);
      step++;
    }

    // go to downside
    // 走到直列的倒數第 stack 個就停止
    while (row < arr.length - stack) {
      result.push(arr[row++][col]);
      step++;
    }

    // go to left
    // 走到橫列的第 stack＋1 個就停止
    while (col !== stack - 1) {
      result.push(arr[row][col--]);
      step++;
    }

    // go to upside
    // 走到直列的第 stack＋1 個就停止
    while (row !== stack - 1) {
      result.push(arr[row--][col]);
      step++;
    }

    // 上面走完會走回這一圈最初的原點，我們要往右下一格繼續跑
    row++;
    col++;

    // 圈數 + 1
    stack++;
  }

  return result;
}

const res = getArray(arr);
console.log(res);
