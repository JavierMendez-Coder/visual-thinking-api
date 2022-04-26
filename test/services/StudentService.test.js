const StudentService = require("./../../lib/services/StudentService");

describe("Unit Tests for the StudentService class", () => {
  test("Test getStudents() method", () => {
    const students = StudentService.getStudents();
    expect(students).not.toBeUndefined();
  });

  test("Test getCertificatedStudents() method", () => {
    const certificatedStudents = StudentService.getCertificatedStudents();
    expect(certificatedStudents).not.toBeUndefined();
  });

  test("Test getStudentsOver500Credits() method", () => {
    const studentsOver500Credits = StudentService.getStudentsOver500Credits();
    expect(studentsOver500Credits).not.toBeUndefined();
  });
});
