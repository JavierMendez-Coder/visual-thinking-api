const StudentService = require("./../../lib/services/StudentService");

describe("Unit Tests for the StudentService class", () => {
  test("Test getCertificatedStudents() method", () => {
    const students = [
      { haveCertification: false },
      { haveCertification: true },
      { haveCertification: false },
      { haveCertification: true },
      { haveCertification: true },
    ];
    const certificatedStudents =
      StudentService.getCertificatedStudents(students);

    expect(certificatedStudents).not.toBeUndefined();
    expect(certificatedStudents.length).toBe(3);
  });

  test("Test getStudentsOver500Credits() method", () => {
    const students = [
      { credits: 550 },
      { credits: 435 },
      { credits: 740 },
      { credits: 365 },
      { credits: 650 },
    ];
    const certificatedStudents =
      StudentService.getStudentsOver500Credits(students);

    expect(certificatedStudents).not.toBeUndefined();
    expect(certificatedStudents.length).toBe(3);
  });
});
