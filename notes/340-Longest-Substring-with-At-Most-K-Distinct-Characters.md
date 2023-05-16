# 340. Longest Substring with At Most K Distinct Characters

- 在看這問題之前，其實之前有類似的題目了！可以先去看看喔！

1. [minimim-size-subarray-sum-equal](./minimim-size-subarray-sum-equal.md)
2. [209. Minimum-Size-Subarray-Sum](./209-Minimum-Size-Subarray-Sum.md)

## 問題描述

給予一個字串 `s` ，以及一個整數 `k`，回傳一個子字串的長度，此字串包含的字元種數須**小於或等於** `k`，且此子陣列必須最長。

### Example 1

```
Input: s = 'eceva', k = 2
Output: 3

Explanation: 符合條件子字串為 "ece"，此字串僅有 e 和 c 兩種字元，等於 ｋ，且此字串長度最長。
```

### Example 2

```
Input: s = 'aa', k = 1
Output: 2

Explanation: 符合條件子字串為 "aa"，此字串僅有 a 1 種字元，等於 ｋ，且此字串長度最長。
```

## 限制

未知，此題被關閉了，沒付錢看不見

## 解法

### 1. 暴力解 => O(n^3)

1. 用兩個指針，一個指著子陣列的頭，一個指著尾
2. 透過移動兩個指針，窮舉所有子陣列 (start, end) = (0, 0) -> (0, 1) -> ... (1, 1)
3. 計算每次子陣列中的獨立元素數量，可用 hash map 或 set 做
4. 窮舉需要 `O(n^2)` 時間，每次計算元素出現次數要 `O(n)`，因此總共 `O(n^3)`

### 2. Sliding Window => O(n^2)?

1. 一樣宣告兩個指針，一個用來指子陣列的頭，一個指尾。這兩個指針先都指在 `idx = 0` 的位置
2. 宣告一個 `charCount`，用來記錄目前獨立元素數量
3. 宣告一個 hash map，用來記錄目前讀過哪些字元了，且分別有幾個
4. 每次讓 `endIdx` 向右移一位，並同時更新 `hmap`, `charCount`
5. 經過 3. 的動作後，判斷 `charCount` 是否大於 `k`，如果有的話：
6. 把 `hmap[s[startIdx]] - 1`，並且把 `startIdx + 1`
7. 如果 `hmap[s[startIdx]]` 歸零了，代表少了一種元素，`charCount - 1`
8. 重複上述動作，直到 `charCount < k`
9. 先記錄下來此次的長度，只要紀錄最長的一次就好
10. 讓 `endIdx` 持續移動到盡頭，並重複上述的行為

## 程式碼

- [Longest-Substring-with-At-Most-K-Distinct-Characters](../codes/Longest-Substring-with-At-Most-K-Distinct-Characters.js)

## 心得

- sliding window 算法萬能

## 參考連結

- [Leetcode 刷題 pattern - Sliding Window](https://blog.techbridge.cc/2019/09/28/leetcode-pattern-sliding-window/)
