const express = require("express");
const router = express.Router();
const { testimonials } = require("../data");

router.get("/", (req, res) => { 
  res.json(testimonials); 
});

module.exports = router;