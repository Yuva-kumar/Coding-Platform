const Problem = require("../Model/AddProblem");

const addProblem = async (req, res) => {
  try {
    const { content, preview, sampleInputs, hiddenTestCases } = req.body;

    const newProblem = new Problem({
      content,
      preview,
      sampleInputs,
      hiddenTestCases,
    });

    await newProblem.save();

    res.status(201).json({ message: "Problem added successfully" });
  } catch (error) {
    console.error("Error adding problem:", error);
    res.status(500).json({ message: "Failed to add problem" });
  }
};

module.exports = { addProblem };
