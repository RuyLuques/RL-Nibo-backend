const express = require("express");
const router = express.Router();
const fs = require("fs");

const backendData = JSON.parse(fs.readFileSync("./app/data/backend.json", "utf8"));

router.get("/", (req, res) => {
  res.json(backendData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const backendCodeId = parseInt(id);

  const backendCode = backendData.find((m) => m.id === backendCodeId);

  if (!backendCode) {
    return res.status(404).json({ error: "Project backend not found." });
  }

  res.json(backendCode);
});

module.exports = router;
