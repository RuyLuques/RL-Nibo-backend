const express = require("express");
const router = express.Router();
const fs = require("fs");

const landingpageData = JSON.parse(fs.readFileSync("./app/data/landingpage.json", "utf8"));

router.get('/', (req, res) => {
    res.json(landingpageData);
});

module.exports = router;
