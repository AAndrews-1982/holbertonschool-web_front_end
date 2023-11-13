function welcome(firstName, lastName) {
    // Concatenate first name and last name with a space
    var fullName = firstName + ' ' + lastName;

    // Function to display full name in an alert
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }

    // Call the displayFullName function
    displayFullName();
}

// Example usage
welcome('John', 'Doe');
