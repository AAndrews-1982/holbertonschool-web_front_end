// Function to create a classroom with a specifid number of students
function createClassRoom(numbersOfStudents) {
// functio to create a seat for a student
  function studentSeat(seat) {
//return a function when called returns the seat number
    return function() {
      return seat;
    };
  }

// Array to store students seat functions
  const students = [];

// Loop to create seat functions for each student and add them to the array
  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }

// Return the array of students seat functions
  return students;
}

// Create a classroom with 10 students
const classRoom = createClassRoom(10);

// Display seat numbers for specific students
console.log(classRoom[0]()); // Should return 1
console.log(classRoom[3]()); // Should return 4
console.log(classRoom[9]()); // Should return 10
