const express = require("express");
const router = express.Router();
const { stats } = require("../data");

router.get("/", (req, res) => { 
  res.json(stats); 
});

module.exports = router;