const express = require("express");
const Problems = require("../schemas/problemSchema");
const mongoose = require("mongoose");
const router = express.Router();

// GET all problems
router.get("/", async (req, res) => {
  try {
    const problems = await Problems.find({});
    res.status(200).json(problems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET a single problem
router.get("/:id", async (req, res) => {
  // res.json({ mssg: "GET a single workout" });
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ error: "Id not valid, no such problem found." });
  }

  const problem = await Problems.findById(id);

  if (!problem) {
    return res.status(404).json({ eror: "No problem with provises id found" });
  }

  res.status(200).json(problem);
});

module.exports = router;
