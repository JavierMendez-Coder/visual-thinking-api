const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Visual Thinking API Welcome!" });
});

app.get("/v1/students", (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Visual Thinking API in localhost: ${port}`);
});
