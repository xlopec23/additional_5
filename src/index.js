module.exports = function check(str, bracketsConfig) {

  var e = str.length;

  for (var c=0; c<e/2; c++) {
    for (var i=0; i<bracketsConfig.length; i++) {
      str = str.replace(bracketsConfig[i][0]+bracketsConfig[i][1], '');
    }
  }
  return (str.length == 0);
}