const Reader = require("./../utils/Reader");

class StudentService {
  static getStudents() {
    return Reader.readJsonFile("visualpartners.json");
  }

  static getCertificatedStudents() {
    const students = this.getStudents();
    const certificatedStudents = students.filter(
      (student) => student.haveCertification
    );
    return certificatedStudents.map((student) => student.email);
  }

  static getStudentsOver500Credits() {
    const students = this.getStudents();
    return students.filter((student) => student.credits > 500);
  }
}

module.exports = StudentService;
