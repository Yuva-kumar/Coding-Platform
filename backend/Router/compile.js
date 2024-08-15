const express = require("express");
const compileAndRunPython = require("../compiler/python/PythonCompiler");
const compileAndRunJava = require("../compiler/java/JavaCompiler");
const Route = express.Router();

Route.post("/compile", (req, res) => {
  console.log(req);
  
  const { Language } = req.body;

  switch (Language) {
    case "java":
      compileAndRunJava(req, res);
      break;
    case "python":
      compileAndRunPython(req, res);
      break;
    case "javascript":
      compileAndRunJavaScript(req, res);
    default:
      res.status(400).send({ output: "Unsupported language", success: false });
  }
});

module.exports = Route;
