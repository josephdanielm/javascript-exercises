const add = function(...numbers) {
	return Array.from(numbers).reduce((sum, current) => sum + current);
};

const subtract = function(...numbers) {
	return Array.from(numbers).reduce((sum, current) => sum - current);
};

const sum = function(numbers) {
	return numbers.reduce((sum, current) => sum + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((sum, current) => sum * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  if (number === 0) {return 1};
  let factorialArray = [];
  for (i=number; i<=number && i>0; i--) {
    factorialArray.push(i);
  }
  return factorialArray.reduce((total, current) => total * current);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
