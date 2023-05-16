# Combination Sum

## 問題描述

問題：給予一個整數陣列 `candidates` 以及一個目標整數 `target`，回傳是否能從給定的陣列中提取部分元素，使其總和等於 `target`？

題號：**39**

## 特徵

1. 只需要回傳是否存在解，不用回傳解的值為何
2. 同一個元素可以重複拿，例如可以重複提取 `candidates[0]`

## 輸入限制

1. `candidates[i]` 只會是正整數，且不存在重複的值
2. `target` 只會是正整數

## 解法

### 重點

> 使用 **遞迴** 作答

> 使用 **backtracking** 作答

### 解題觀念

```
f(n) = c[0] + f(n - c[0])
     = c[0] + c[0] + f(n - c[0] - c[0])
     = c[0] + c[0] + c[0] + f(n - c[0] - c[0] - c[0])
     ....
     不斷重複上述步驟後，若值 (n - c[0] - c[0] - c[0]) 剛好為 0，表示此串數值為一解
     不斷重複上述步驟後，若值小於 0，表示此串非解

f(n) = c[0] + f(n - c[0])
     = c[0] + c[0] + f(n - c[0] - c[0])
     = c[0] + c[0] + c[1] + f(n - c[0] - c[0] - c[1])
     重複上述道理，確認是否為解

...

f(n) = c[1] + f(n - c[1])
     = c[1] + c[1] + f(n - c[1] - c[1])
     = c[1] + c[1] + c[1] + f(n - c[1] - c[1] - c[1])
     ...
     一樣道理確認是否此串為解

...
```

- 需要使用遞迴跑一個迴圈，走訪所有 candidates 確認是否有解
- 把問題拆分成子問題，當我已經拿了一個元素 `c[i]`，問題就變成 `target - c[i]` 的小問題

### 程式碼

- 請看 [combination-sum.js](../codes/combination-sum.js)

## 心得

當初還額外使用一個 `flag` 確認是否有解，如果有解就設為 `true`，否則保持 `false`，最後回傳 `flag`。

後來跑去詢問 chatGPT 能不能幫我優化，他給出一個：中途找到解就直接中斷遞迴，直接輸出 `true` 的優化解。

---

## 衍生問題

1. 如果元素不能重複抽取，最多只能拿一次，那程式碼該如何修改？
   - [請看 combination-sum-no-repeat.js](../codes/combination-sum-no-repeat.js)
   - 觀念：要多一個判斷式，如果已經走訪到陣列的盡頭還是沒有解那就是無解。以及，每次跑迴圈的指針得往後挪一格。
2. 如果元素可以重複拿，但得回傳其中任一個解，該如何修改程式碼？
   - [Solution - combination-sum-one-result.js](../codes/combination-sum-one-result.js)
3. 如果元素可以重複拿，但得回傳所有的解，該如何修改程式碼？
   - [Solution - combination-sum-all-results.js](../codes/combination-sum-all-results.js)
4. 是否能加入 dp 更優化速度
   - 問了 chatGPT 說有些衍生題不適合用 dp，dp 只適用在只需儲存一個最佳解的場合。
