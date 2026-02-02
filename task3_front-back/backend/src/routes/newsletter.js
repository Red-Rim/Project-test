const express = require("express");
const router = express.Router();
const { newsletterSubscribers } = require("../data");

router.post("/", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email requis" });
  
  const exists = newsletterSubscribers.find(s => s.email === email);
  if (exists) return res.status(400).json({ message: "Deja inscrit" });
  
  const newSub = { 
    id: newsletterSubscribers.length + 1, 
    email, 
    date: new Date().toISOString() 
  };
  newsletterSubscribers.push(newSub);
  res.status(201).json({ message: "Inscription reussie!", subscriber: newSub });
});

router.get("/", (req, res) => { 
  res.json(newsletterSubscribers); 
});

module.exports = router;