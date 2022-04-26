const StudentService = require("./../../lib/services/StudentService");

describe("Unit Tests for the StudentService class", () => {
  test("Test getStudents() method", () => {
    const students = StudentService.getStudents();
    expect(students).not.toBeUndefined();
  });

  test("Test getCertificatedStudents() method to not be undefined", () => {
    const certificatedStudents = StudentService.getCertificatedStudents();
    expect(certificatedStudents).not.toBeUndefined();
  });

  test("Test getCertificatedStudents() method to return students with only a certification", () => {
    const certificatedStudents = StudentService.getCertificatedStudents();
    const areAllCertificated = certificatedStudents.every((student) => student.haveCertification);

    expect(areAllCertificated).toBeTruthy();
  });

  test("Test getStudentsOver500Credits() method to not be undefined", () => {
    const studentsOver500Credits = StudentService.getStudentsOver500Credits();
    expect(studentsOver500Credits).not.toBeUndefined();
  });

  test("Test getStudentsOver500Credits() method to return students with credits greater than 500", () => {
    const studentsOver500Credits = StudentService.getStudentsOver500Credits();
    const areAllOver500Credits  = studentsOver500Credits.every((student) => student.credits > 500);

    expect(areAllOver500Credits).toBeTruthy();
  });
});
