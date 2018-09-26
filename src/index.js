module.exports = function solveEquation(equation) {
  const array = equation.split(' ');
  let a = Number(array[0]);
  let b = Number(array[3] + array[4]);
  let c = Number(array[7] + array[8]);
  let d = b * b - 4 * a * c;
  const result = [ ];
  if (d > 0) {
    result.push(Math.round((-b + Math.sqrt(d)) / (2*a)));
    result.push(Math.round((-b - Math.sqrt(d)) / (2*a)));
  } else if (d = 0) {
    result.push(Math.round(-b / (2*a)));
  }
  return result.sort((a, b) => a - b);
}
