module.exports = function reverse (n) {
  var num = 0;
  if (n>0){
  num = n.toString().split('').reverse().join('');
  }else{
      n=n*-1;
      num = n.toString().split('').reverse().join('');
  }
  return num
}
