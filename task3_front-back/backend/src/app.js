const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const leadersRouter = require("./routes/leaders");
const jobsRouter = require("./routes/jobs");
const newsRouter = require("./routes/news");
const testimonialsRouter = require("./routes/testimonials");
const statsRouter = require("./routes/stats");
const newsletterRouter = require("./routes/newsletter");
const membersRouter = require("./routes/members");

app.use("/api/leaders", leadersRouter);
app.use("/api/jobs", jobsRouter);
app.use("/api/news", newsRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use("/api/stats", statsRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/members", membersRouter);

app.get("/", (req, res) => {
  res.json({ message: "morocco aluumni backend" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Serveur lance sur http://localhost:" + PORT);
});