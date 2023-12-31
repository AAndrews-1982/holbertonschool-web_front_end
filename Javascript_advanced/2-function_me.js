// Define the welcomeMessage function
function welcomeMessage(fullName) {
  // Return a closure for an alert displaying Welcome <fullName>
  return function() {
    alert("Welcome " + fullName);
  };
}

// Create three variables with calls to welcomeMessage
var guillaume = welcomeMessage("Guillaume");
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");

// Test the functions by executing them in the console
// This should display three alerts with the corresponding names
guillaume();
alex();
fred();
