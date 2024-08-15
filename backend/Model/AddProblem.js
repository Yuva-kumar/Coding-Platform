const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
  },
  sampleInputs: [
    {
      input: String,
      output: String,
      explanation: String,
    },
  ],
  hiddenTestCases: [
    {
      input: String,
      output: String,
    },
  ],
});

const Problem = mongoose.model("Problem", ProblemSchema);

module.exports = Problem;
