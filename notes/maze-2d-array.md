# Maze 2d array

## 題目描述

給予一個二維陣列，大小為 m * n，請以回字形輸出此陣列內的值。

## 例子

```
array = [
    [1,  55,  2,     78],
    [35, 566, 0,     13],
    [9,  4,   24550, 15]
]

output: [1, 55, 2, 78, 13, 15, 24550, 4, 9, 35, 566, 0]
```

## 參考做法

1. 用一個變數計算目前的步數，每輸出一個數字 +1，直到步數與陣列大小一致時終止
2. 跑四個 `while()` 迴圈，分別是 往右走、往下走、往左走、往上走，最後走到原點走完一圈
3. 往右下移動一格，開始重複 2. 的步驟，在內圈走一圈
4. 重複 3. 的步驟值到 1. 的條件符合為止

## 程式碼

- [code](../codes/maze-2d-array.js)

## 複雜度

- time: `O(m * n)`