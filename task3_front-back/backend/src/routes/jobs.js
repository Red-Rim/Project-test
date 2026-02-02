const express = require("express");
const router = express.Router();
const { jobs } = require("../data");

router.get("/", (req, res) => { 
  res.json(jobs); 
});

router.get("/:id", (req, res) => {
  const job = jobs.find(j => j.id === parseInt(req.params.id));
  if (!job) return res.status(404).json({ message: "Offre non trouvee" });
  res.json(job);
});

module.exports = router;