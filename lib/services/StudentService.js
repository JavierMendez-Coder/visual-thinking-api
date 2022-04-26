const Reader = require("./../utils/Reader");

class StudentService {
  static getStudents() {
    return Reader.readJsonFile("visualpartners.json");
  }

  static getCertificatedStudents() {
    const students = this.getStudents()
    return students.filter((student) => student.haveCertification);
  }

  static getStudentsOver500Credits() {
    const students = this.getStudents()
    return students.filter((student) => student.credits > 500);
  }
}

module.exports = StudentService;
