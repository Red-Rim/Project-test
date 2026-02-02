const express = require("express");
const router = express.Router();
const { members } = require("../data");

router.get("/", (req, res) => { 
  res.json(members); 
});

router.get("/:id", (req, res) => {
  const member = members.find(m => m.id === parseInt(req.params.id));
  if (!member) return res.status(404).json({ message: "Membre non trouve" });
  res.json(member);
});

module.exports = router;