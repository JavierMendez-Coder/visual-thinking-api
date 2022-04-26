const Reader = require("./../utils/Reader");

class StudentService {
  static getCertificatedStudents(students) {
    return students.filter((student) => student.haveCertification);
  }

  static getStudentsOver500Credits(students) {
    return students.filter((student) => student.credits > 500);
  }
}

module.exports = StudentService;
