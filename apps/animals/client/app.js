const express = require('express');
const app = express();
const axios = require('axios');
const swStats = require('swagger-stats');

app.use(swStats.getMiddleware());

const PORT = 3001;
const HOST = '0.0.0.0';

app.get('/client/addAnimal/:newAnimal', async (req, res) => {
  const animalURL = `http://${process.env.SVC}.${process.env.NAMESPACE}.svc.cluster.local/server/addAnimal/${req.params.newAnimal}`;
  await addAnimal(animalURL);
  res.send('axios request sent');
});

const addAnimal = async (animalURL) => {
  await axios
    .post(animalURL)
    .then((response) => {
      console.log('RESPONSE', response.data);
    })
    .catch((error) => {
      console.log('ERROR', error);
    });
};

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
