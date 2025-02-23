const express = require("express");

const glossaryController = require("./controllers/Glossary");
const graphController = require("./controllers/Graph");

const router = express.Router();

router.get("/glossary", glossaryController.show);
router.get("/graph", graphController.show);

router.all("*", (req, res) => {
  res.status(404).json({ error: 404 })
});

module.exports = router;