function merge(left, right) {
  let l = 0;
  let r = 0;
  let newArr = [];

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      newArr.push(left[l]);
      l++;
    } else {
      newArr.push(right[r]);
      r++;
    }
  }

  return [...newArr, ...left.slice(l), ...right.slice(r)];
}

function mergeSort(nums) {
  if (nums.length === 1) {
    return nums;
  }

  const left = nums.slice(0, Math.floor(nums.length / 2));
  const right = nums.slice(Math.floor(nums.length / 2));

  return merge(mergeSort(left), mergeSort(right));
}

const ans = mergeSort([1, 44, 8, 555, 109, 2]);
console.log(ans);
