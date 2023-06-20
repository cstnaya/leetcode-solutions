# Sort an object

## Target


Input: `{ "cat": 10, "zebra": 1, "apple": 4, "ace": 4 }`

The keys represent `words`, and the values represent the `frequency` of each word in a sentence.

Please sort the input based on each word's **frequency in descending order**. If two words have the same frequency, sort them in **ascending alphabetical order**.

Output: `{ "cat": 10, "ace": 4, "apple": 4, "zebra": 1 }`

Explanation: The frequencies of the words are 10, 1, 4, 4, respectively. Initially, the object is transformed into { "cat": 10, "apple": 4, "ace": 4, "zebra": 1 }. Since both 'ace' and 'apple' have a frequency of 4, they should be sorted in alphabetical order, resulting in { "cat": 10, "ace": 4, "apple": 4, "zebra": 1 }.

## Solution

- [Solution](../codes/sort-an-object-by-value-then-key.js)

## Time Complexity

- `O(nlogn)`

## Reference

- [stackoverflow](https://stackoverflow.com/a/31102605)