# 209. Minimum Size Subarray Sum

- 在看這問題之前，推薦先看同類型問題的簡單版，請看[這個](./minimim-size-subarray-sum-equal.md)。

## 問題描述

給予一個整數陣列 `nums` ，以及一個目標整數 `target`，回傳一個子陣列的長度，此子陣列的元素總和須**大於或等於** `target`，且此子陣列必須最短。

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

1. 一樣宣告兩個指針，一個用來指子陣列的頭，一個指尾。這兩個指針先都指在 `idx = 0` 的位置
2. 宣告一個 `sum`，用來存放子陣列的和
3. 每次讓 `endIdx` 向右移一位，並同時讓 `sum += nums[endIdx]`
4. 判斷經過 3. 的動作後，`sum` 是否大於等於 `target`，如果有的話：
5. 先記錄下來此次的長度
6. 把 `sum - nums[startIdx]`，並且把 `startIdx + 1`
7. 重複上述動作，直到 `sum < target`
8. 讓 `endIdx` 持續移動到盡頭，並重複上述的行為

## 程式碼

## 心得

- sliding window 算法萬能

## 衍生問題

- 如果不是輸出長度，而是輸出子陣列內容，該怎麼做呢？

## 參考連結

- [Leetcode 刷題 pattern - Sliding Window](https://blog.techbridge.cc/2019/09/28/leetcode-pattern-sliding-window/)
