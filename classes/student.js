const Person = require('./person');

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  };

  static compareGPA(student1, student2) {
    const highGPAMsg = (higherStud) => `${higherStud.firstName} ${higherStud.lastName} has the higher GPA.`;

    if (student1.GPA > student2.GPA) {
      return highGPAMsg(student1);
    } else if (student1.GPA < student2.GPA) {
      return highGPAMsg(student2);
    } else {
      return "Both students have the same GPA";
    }
  };
};

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
