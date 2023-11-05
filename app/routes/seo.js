const express = require("express");
const router = express.Router();
const fs = require("fs");

const seoData = JSON.parse(fs.readFileSync("./app/data/seo.json", "utf8"));

router.get("/", (req, res) => {
  res.json(seoData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const seoId = parseInt(id);

  const seo = seoData.find((m) => m.id === seoId);

  if (!seo) {
    return res.status(404).json({ error: "Project seo not found." });
  }

  res.json(seo);
});

module.exports = router;
