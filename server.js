const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("welcome!");
});

const apartmentRoutes = require('./routes/apartments');
const houseRoutes = require('./routes/houses');

app.use('/apartments', apartmentRoutes);
app.use('/houses', houseRoutes);
app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
