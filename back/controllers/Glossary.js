const { Term } = require("../database/models");

async function showAll(req, res) {
  let terms = await Term.findAll({});

  res.status(200).json(terms);
}

module.exports = {
	showAll,
}