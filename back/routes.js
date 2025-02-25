const express = require("express");

const glossaryController = require("./controllers/Glossary");
const relationController = require("./controllers/Relation");

const router = express.Router();

router.get("/glossary", glossaryController.showAll);
router.get("/relations", relationController.showAll);

router.all("*", (req, res) => {
  res.status(404).json({ error: 404 })
});

module.exports = router;