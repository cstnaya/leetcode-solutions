function sortByFreqThenWord(obj) {
  //	1. transform obj to entries: [[a, 2], [cat, 4], [zar, 2]]
  const pairs = Object.entries(obj);

  // 2. sorting
  pairs.sort((a, b) => {
    //	sort by freq
    if (a[1] - b[1] < 0) {
      return 1;
    } else if (a[1] === b[1]) {
      // sort by word
      return a[0] < b[0] ? -1 : 1;
    } else {
      return -1;
    }
  });

  return pairs;
}

const obj = {
  zar: 2,
  a: 2,
  cat: 4,
};

console.log(sortByFreqThenWord(obj));
