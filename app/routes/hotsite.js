const express = require("express");
const router = express.Router();
const fs = require("fs");

const hotsiteData = JSON.parse(fs.readFileSync("./app/data/hotsite.json", "utf8"));

router.get('/', (req, res) => {
    res.json(hotsiteData);
});

module.exports = router;
