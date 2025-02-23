const { Term } = require("../database/models");

async function show(req, res) {
  let terms = await Term.findAll({});

  res.status(200).json(terms);
}

module.exports = {
	show,
}