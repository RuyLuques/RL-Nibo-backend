const express = require("express");
const router = express.Router();
const fs = require("fs");

const automationhubspotData = JSON.parse(fs.readFileSync("./app/data/automationhubspot.json", "utf8"));

router.get("/", (req, res) => {
  res.json(automationhubspotData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const automationhubspotId = parseInt(id);

  const automationhubspot = automationhubspotData.find((m) => m.id === automationhubspotId);

  if (!automationhubspot) {
    return res.status(404).json({ error: "Project not found." });
  }

  res.json(automationhubspot);
});

module.exports = router;
