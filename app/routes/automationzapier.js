const express = require("express");
const router = express.Router();
const fs = require("fs");

const automationzapierData = JSON.parse(fs.readFileSync("./app/data/automationzapier.json", "utf8"));

router.get("/", (req, res) => {
  res.json(automationzapierData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const automationzapierId = parseInt(id);

  const automationzapier = automationzapierData.find((m) => m.id === automationzapierId);

  if (!automationzapier) {
    return res.status(404).json({ error: "Project not found." });
  }

  res.json(automationzapier);
});

module.exports = router;
