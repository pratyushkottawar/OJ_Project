const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testcasesSchema = new Schema({
  pid: {
    type: String,
    required: true,
  },
  input: {
    type: String,
  },
  output: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("testcases", testcasesSchema);
