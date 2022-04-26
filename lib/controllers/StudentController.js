const StudentService = require("./../services/StudentService");

class StudentController {
  static getStudents() {
    return StudentService.getStudents();
  }

  static getCertifiedStudents() {
    return StudentService.getCertifiedStudents();
  }

  static getStudentsOver500Credits() {
    return StudentService.getStudentsOver500Credits();
  }
}

module.exports = StudentController;
