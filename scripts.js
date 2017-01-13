/*
function getArea(width, height) {
return width * height;
} //Works OK
*/
function numOne(a) {
  return (a * a) / a;
}
console.log(numOne(10));
function numTwo(b) {
  return b = (b + b) * (b * b) / b;
}
console.log(numTwo(2));
function numThree(c) {
  return (c % (c * c * c) + (c + c + c));
}
console.log(numThree(25));
//function combine(numOne, numTwo, numThree) {
//  return numOne + numTwo + numThree;
//}
var combine = numOne, numTwo, numThree;
console.log(combine);
/*
var msg = numOne;
var func = function() {
  console.log(msg);
}
*/
