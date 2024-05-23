const { getAll, getOne } = require('../models/house');

const index = (req, res) => {
  res.json(getAll());
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const house = getOne(id);
  if (house) {
    res.json(house);
  } else {
    res.status(404).send('House not found');
  }
};

module.exports = { index, show };
