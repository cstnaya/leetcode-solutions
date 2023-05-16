# Minimum Size Subarray Sum Equal

## 問題描述

給予一個整數陣列 `nums` ，以及一個目標整數 `target`，回傳一個子陣列的長度，此子陣列的元素總和須**等於** `target`，且此子陣列必須最短。

## 限制

1. 如果沒有解存在，輸出 0
2. `nums[i]` >= 1
3. `target` >= 1

## 解法

### 1. 暴力解 => O(n^3)

1. 用兩個指針，一個指著子陣列的頭，一個指著尾
2. 透過移動兩個指針，窮舉所有子陣列 (start, end) = (0, 0) -> (0, 1) -> ... (1, 1)
3. 計算每次子陣列中的元素和，並紀錄當中長度最小的
4. 窮舉需要 `O(n^2)` 時間，每次計算總和要 `O(n)`，因此總共 `O(n^3)`

### 2. Sliding Window => O(n^2)?

1. 宣告兩個指針，一個用來指子陣列的頭，一個指尾。這兩個指針都先指在 `idx = 0` 的位置
2. 宣告一個 `sum`，用來存放子陣列的和，初始值設為 `0`
3. 每次讓 `endIdx` 向右移一位，並同時讓 `sum += nums[endIdx]`
4. 判斷經過 3. 的動作後，`sum` 是不是超過 `target` 了，如果是的話，把 `sum -= nums[startIdx]`
5. 重複 4. 的動作，直到 `sum` 不再大於 `target`
6. 判斷是否 `sum == target`，如果是的話，紀錄此次的長度，以後有出現更短的再更新紀錄就好

## 程式碼

- [solution](../codes/minimim-size-subarray-sum-equal.js)

## 心得

以前只知道暴力解，現在知道 sliding window 算法後，應該之後很多解都能更快算出了

## 衍生問題

1. 如果要你輸出的不是最短長度，而是最短子陣列的內容，你會怎麼做呢？
2. 如果不僅是等於 `target` 的子陣列，而是要找出大於或等於 `target` 的子陣列，你會怎麼做呢？

## 參考連結

- [Leetcode 刷題 pattern - Sliding Window](https://blog.techbridge.cc/2019/09/28/leetcode-pattern-sliding-window/)
