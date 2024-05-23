const { getAll, getOne } = require('../models/apartment');

const index = (req, res) => {
  res.json(getAll());
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const apartment = getOne(id);
  if (apartment) {
    res.json(apartment);
  } else {
    res.status(404).send('Apartment not found');
  }
};

module.exports = { index, show };
