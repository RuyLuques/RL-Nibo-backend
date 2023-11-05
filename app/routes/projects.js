const express = require("express");
const router = express.Router();
const fs = require("fs");

const projectsData = JSON.parse(fs.readFileSync("./app/data/projects.json", "utf8"));

router.get("/", (req, res) => {
  res.json(projectsData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const projectId = parseInt(id);

  const project = projectsData.find((m) => m.id === projectId);

  if (!project) {
    return res.status(404).json({ error: "Project not found." });
  }

  res.json(project);
});

module.exports = router;
