const express = require("express");
const router = express.Router();
const fs = require("fs");

const technologiesData = JSON.parse(fs.readFileSync("./app/data/technologies.json", "utf8"));

router.get("/", (req, res) => {
  res.json(technologiesData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const technologiesId = parseInt(id);

  const technologies = technologiesData.find((m) => m.id === technologiesId);

  if (!technologies) {
    return res.status(404).json({ error: "Project not found." });
  }

  res.json(technologies);
});

module.exports = router;
