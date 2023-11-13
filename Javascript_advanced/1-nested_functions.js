// Define the global variable
var globalVariable = "Welcome";

// Define the outer function
function outer() {
  // Alert the content of the global variable
  alert(globalVariable);

  // Create a local variable within outer
  var course = "Holberton";

  // Define the inner function
  function inner() {
    // Alert the content of the global variable and course
    alert(globalVariable + " " + course);
    
    // Create a local variable within inner
    var exclamation = "!";

    // Define the inception function
    function inception() {
      // Alert the content of the global variable, course, and exclamation
      alert(globalVariable + " " + course + exclamation);
    }

    // Call the inception function
    inception();
  }

  // Call the inner function
  inner();
}

// Call the outer function
outer();

// Call the inner function within outer
// Note: This will display the second popup (Welcome Holberton)
outer();

// Call the inception function within inner
// Note: This will display the third popup (Welcome Holberton!)
inner();
