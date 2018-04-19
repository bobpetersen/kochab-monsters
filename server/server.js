const express = require('express');
const app = express();
const PORT = 3000;

const monster_data = require('./modules/monster-data');

app.use(express.static('server/public'));

app.get('/all-monsters', (req, res) => {
  res.send(monster_data);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
