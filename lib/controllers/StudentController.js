const StudentService = require("./../services/StudentService");

class StudentController {
  static getStudents() {
    return StudentService.getStudents();
  }

  static getCertificatedStudents() {
    return StudentService.getCertificatedStudents();
  }

  static getStudentsOver500Credits() {
    return StudentService.getStudentsOver500Credits();
  }
}

module.exports = StudentController;
