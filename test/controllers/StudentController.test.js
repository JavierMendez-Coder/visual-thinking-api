const StudentController = require("./../../lib/controllers/StudentController");

describe("Unit Tests for the StudentController class", () => {
  test("Test getStudents() method", () => {
    const students = StudentController.getStudents();
    expect(students).not.toBeUndefined();
  });

  test("Test getCertificatedStudents() method", () => {
    const certificatedStudents = StudentController.getCertificatedStudents();
    expect(certificatedStudents).not.toBeUndefined();
  });


  test("Test getCertificatedStudents() method to return students with only a certification", () => {
    const certificatedStudents = StudentController.getCertificatedStudents();
    const areAllCertificated = certificatedStudents.every((student) => student.haveCertification);

    expect(areAllCertificated).toBeTruthy();
  });

  test("Test getStudentsOver500Credits() method", () => {
    const studentsOver500Credits = StudentController.getStudentsOver500Credits();
    expect(studentsOver500Credits).not.toBeUndefined();
  });

  test("Test getStudentsOver500Credits() method to return students with credits greater than 500", () => {
    const studentsOver500Credits = StudentController.getStudentsOver500Credits();
    const areAllOver500Credits  = studentsOver500Credits.every((student) => student.credits > 500);

    expect(areAllOver500Credits).toBeTruthy();
  });
});
