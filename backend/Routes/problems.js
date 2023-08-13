const { execSync } = require("child_process");
const express = require("express");
const Problems = require("../schemas/problemSchema");
const TestCases = require("../schemas/testcasesSchema");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// now we store the path of runCodes directory in dirRunCodes
const dirRunCodes = path.join(process.cwd(), "runCodes");
//below if statement is to make this dir if not present.
if (!fs.existsSync(dirRunCodes)) {
  fs.mkdirSync(dirRunCodes, { recursive: true });
}

// const filePath = path.join(dirRunCodes, "code.cpp");
const filePath = path.join(dirRunCodes, "code.cpp");
const aPath = path.join(dirRunCodes, "a.exe");

// GET all problems
router.get("/", async (req, res) => {
  try {
    const problems = await Problems.find({});
    res.status(200).json(problems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const outputs = () => {
  try {
    inputvar = "30";
    const compileCommand = `g++ ${filePath} -o ${aPath}`;
    execSync(compileCommand);
    // const changeDirCommand = `cd ${dirRunCodes}`;
    // execSync(changeDirCommand);
    const execCommand = `${aPath}`;
    const stdout = execSync(execCommand, { input: inputvar });
    return stdout.toString(); // Convert the buffer to a string
  } catch (error) {
    throw error;
  }
};

const compileFile = () => {
  try {
    const compileCommand = `g++ ${filePath} -o ${aPath}`;
    execSync(compileCommand);
  } catch (error) {
    console.error("Compilation error:", error.message);
    return "Compilation error";
  }
};

const runFile = (inputvar) => {
  try {
    const execCommand = `${aPath}`;
    const stdout = execSync(execCommand, { input: inputvar });
    return stdout.toString(); // Convert the buffer to a string
  } catch (error) {
    throw error;
  }
};

// GET a single problem
router.post("/:id", async (req, res) => {
  const { id } = req.params;

  const cases = await TestCases.find({ pid: id });
  const input = cases[0].input;
  const correctOutput = cases[0].output;

  const { language = "cpp", content } = req.body;
  await fs.writeFileSync(filePath, content);

  //compileFile
  try {
    const compileCommand = `g++ ${filePath} -o ${aPath}`;
    execSync(compileCommand);
  } catch (error) {
    console.error("Compilation error:", error.message);
    return "Compilation error";
  }

  //runCode
  let userOutput = null;
  try {
    userOutput = runFile(input);
    console.log("Program output:", userOutput);
  } catch (error) {
    console.error("Error:", error.message);
  }
  console.log(correctOutput === userOutput.trim());
  res.status(200).json({ userOutput, correctOutput });
});

module.exports = router;
