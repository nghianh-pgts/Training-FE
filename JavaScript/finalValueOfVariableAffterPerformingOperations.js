var finalValueAfterOperations = function (operations) {
  var rs = 0;
  for (var operation of operations) {
    if (operation.startsWith("+") || operation.endsWith("+")) {
      rs++;
    } else if (operation.startsWith("-") || operation.endsWith("-")) {
      rs--;
    }
  }

  return rs;
};
