const Reader = require("./../../lib/utils/Reader");

describe("Unit Tests for the Reader class", () => {
  test("Test readJsonFile() method", () => {
    const students = Reader.readJsonFile("visualpartners.json");

    expect(students).not.toBeUndefined();
  });
});
