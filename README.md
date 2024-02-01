# Practice: Inheritance

This project is part of the App Academy Open curriculum, where I explored and
practiced class **inheritance** in JavaScript. The exercise focuses on creating child
classes for a `Person` parent class, demonstrating how traits can be inherited to
prevent code duplication.

## Project Structure

- **`classes/person.js`**: Parent class that defines basic information about a person.
- **`classes/student.js`**: Child class for representing students, inheriting from the `Person` class.
- **`classes/teacher.js`**: Child class for representing teachers, inheriting from the `Person` class.

## Features

### Student Class

- Inherits from the `Person` class.
- Additional attributes: `major` and `GPA`.
- Static method: `compareGPA(student1, student2)` compares GPAs and returns a string indicating the higher GPA.

### Teacher Class

- Inherits from the `Person` class.
- Additional attributes: `subject` and `yearsOfExperience`.
- Static method: `combinedYearsOfExperience(teachers)` calculates the total years of experience for an array of teachers.

## Getting Started

1. **Clone the repository.**
   ```bash
   git clone https://github.com/your-username/class-inheritance-exercise.git

2. Navigate to the project directory.
   ```bash
   npm test test/student-spec.js

3. Explore the code and run test specs.
   ```bash
   npm test
