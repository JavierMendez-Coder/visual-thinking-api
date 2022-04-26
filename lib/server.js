const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Visual Thinking API Welcome!" });
});

app.get("/v1/students", (req, res) => {
  const students = StudentController.getStudents();
  res.status(200).json(students);
});

app.get("/v1/students/certified", (req, res) => {
  const certifiedStudents = StudentController.getCertifiedStudents();
  res.status(200).json(certifiedStudents);
});

app.get("/v1/students/credits", (req, res) => {
  const studentsOver500Credits = StudentController.getStudentsOver500Credits();
  res.status(200).json(studentsOver500Credits);
});

app.listen(port, () => {
  console.log(`Visual Thinking API in localhost: ${port}`);
});
