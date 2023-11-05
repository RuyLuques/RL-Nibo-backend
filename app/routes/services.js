const express = require("express");
const router = express.Router();
const fs = require("fs");

const servicesData = JSON.parse(fs.readFileSync("./app/data/services.json", "utf8"));

router.get("/", (req, res) => {
  res.json(servicesData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const serviceId = parseInt(id);

  const service = servicesData.find((m) => m.id === serviceId);

  if (!service) {
    return res.status(404).json({ error: "Project services not found." });
  }

  res.json(service);
});

module.exports = router;
