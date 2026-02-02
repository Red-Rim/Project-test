const express = require("express");
const router = express.Router();
const { news } = require("../data");

router.get("/", (req, res) => {
  const { category } = req.query;
  if (category && category !== "all") {
    return res.json(news.filter(n => n.category === category));
  }
  res.json(news);
});

router.get("/:id", (req, res) => {
  const article = news.find(n => n.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ message: "Actualite non trouvee" });
  res.json(article);
});

module.exports = router;