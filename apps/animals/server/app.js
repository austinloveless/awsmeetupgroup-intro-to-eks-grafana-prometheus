const express = require('express');
const app = express();
const swStats = require('swagger-stats');

app.use(swStats.getMiddleware());

const PORT = 3002;
const HOST = '0.0.0.0';

const arrayData = ['dog', 'cat'];

app.get('/server/animals', function (req, res) {
  res.send(arrayData);
});

app.post('/server/addAnimal/:newAnimal', (req, res) => {
  arrayData.push(req.params.newAnimal);
  res.send(arrayData);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
