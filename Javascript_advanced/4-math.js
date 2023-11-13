// Function that returns a closure to divide a number by a given first number
function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber;
  };
}

// Function that returns a closure to add a number to a given first number
function addBy(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  };
}

// Create closures using the functions above
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

// Testing the closures
console.log(addBy100(20));       // Should display 120 (100 + 20)
console.log(divideBy10(20));      // Should display 2 (20 / 10)
console.log(divideBy100(200));    // Should display 2 (200 / 100)
console.log(addBy1000(20));       // Should display 1020 (1000 + 20)
