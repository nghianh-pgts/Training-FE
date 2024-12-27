var numJewelsInStones = function (jewels, stones) {
  var count = 0;
  var jewelsSet = new Set();

  for (var c of jewels) {
    jewelsSet.add(c);
  }

  for (var stone of stones) {
    if (jewelsSet.has(stone)) {
      count++;
    }
  }
  return count;
};
