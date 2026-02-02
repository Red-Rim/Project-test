const express = require("express");
const router = express.Router();
const { leaders } = require("../data");

router.get("/", (req, res) => { 
  res.json(leaders); 
});

router.get("/:id", (req, res) => {
  const leader = leaders.find(l => l.id === parseInt(req.params.id));
  if (!leader) return res.status(404).json({ message: "Leader non trouve" });
  res.json(leader);
});

module.exports = router;