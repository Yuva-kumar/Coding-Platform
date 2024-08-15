require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.APP_PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routes
const compileRoute = require("./Router/compile");
const addProblemRoute = require("./Router/AddProblem");
const problemRouter = require("./Router/GetProblem");

mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose Connected"))
  .catch((err) => console.log("Not Connected", err));

// Use routes
app.use("/execute", compileRoute);
app.use("/problems", addProblemRoute);
app.use("/GetProblem", problemRouter);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
