var findWordsContaining = function (words, x) {
  let array = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i].charAt(j) == x) {
        array.push(i);
        break;
      }
    }
  }
  return array;
};
