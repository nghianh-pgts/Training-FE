var defangIPaddr = function (address) {
  var rs = address.replaceAll(".", "[.]");
  return rs;
};
