const Problem = require("../Model/AddProblem");

// Controller to fetch a single problem
const getProblem = async (req, res) => {
  try {
    const problem = await Problem.findOne();
    if (!problem) {
      return res.status(200).json({ message: "Problem not found" });
    }
    res.json(problem);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProblem };
