const { Relation } = require("../database/models");

async function showAll(req, res) {
  let rels = await Relation.findAll({});

  res.status(200).json(rels);
}

module.exports = {
	showAll,
}