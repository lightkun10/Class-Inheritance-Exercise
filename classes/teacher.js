const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  };

  static combinedYearsOfExperience(teachers) {
    let sumExp = 0;
    for (const teacher of teachers) {
      sumExp += teacher.yearsOfExperience;
    }
    return sumExp;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
