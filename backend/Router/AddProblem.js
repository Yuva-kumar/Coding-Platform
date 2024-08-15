const express = require("express");
const router = express.Router();
const { addProblem } = require("../Controller/AddProblem");

// Route to handle adding a problem
router.post("/add", addProblem);

module.exports = router;
