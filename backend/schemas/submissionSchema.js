const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const submissionSchema = new Schema(
  {
    problemId: {
      type: String,
      required: true,
    },
    code: {
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
    verdict: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("submissions", submissionSchema); //So here submissions is the collection having the schema (submissionSchema)
