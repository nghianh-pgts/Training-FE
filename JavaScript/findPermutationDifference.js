var findPermutationDifference = function (s, t) {
  if (s.length !== t.length) {
    throw new Error("Strings must have the same length");
  }

  let rs = 0;

  const charMap = new Map();
  for (let i = 0; i < t.length; i++) {
    if (!charMap.has(t[i])) {
      charMap.set(t[i], []);
    }
    charMap.get(t[i]).push(i);
  }

  for (let k = 0; k < s.length; k++) {
    if (!charMap.has(s[k]) || charMap.get(s[k]).length === 0) {
      throw new Error(
        `Character '${s[k]}' not found or already used in string t`
      );
    }

    const position = charMap.get(s[k]).shift();
    rs += Math.abs(k - position);
  }

  return rs;
};
