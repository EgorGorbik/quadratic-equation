module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  var a = +arr[0];
  var b = arr[3]+arr[4];
  var c = arr[7]+arr[8];
  var dis = (b*b) - (4*a*c);
  var answer1 = (-b + (Math.sqrt(dis)))/(2*a);
  var answer2 = (-b - (Math.sqrt(dis)))/(2*a);
  
  answer1 = Math.round(answer1);
  answer2 = Math.round(answer2);
  
  if (answer1 < answer2) return [answer1, answer2];
  else return [answer2, answer1];
}
