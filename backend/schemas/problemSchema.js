const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const problemSchema = new Schema({
  problemTitle: {
    type: String,
    required: true,
  },
  problemStatement: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  answerCode: {
    type: String,
  },
});

module.exports = mongoose.model("problems", problemSchema); //So here problems is the collection having the schema (problemSchema)
