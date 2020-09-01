const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const generatedDogs = require('./dogs_model/dogs');

app.get('/dogs', (request, response) => {
  const {
    name,
    breed,
    subBreed,
    gender,
    age,
  } = request.query;
  const filteredDogs = generatedDogs.filter((dog) => {
    const hasName = !name || dog.name.toUpperCase().indexOf(name.toUpperCase()) > -1;
    const hasBreed = !breed || dog.breed === breed;
    const hasSubBreed = !subBreed || dog.subBreed === subBreed;
    const hasGender = !gender || dog.gender === gender;
    const hasAge = !age || dog.age === +age;

    return hasName && hasBreed && hasSubBreed && hasGender && hasAge;
  });

  return response.json(filteredDogs);
});

app.get('/allDogs', (request, response) => response.json(generatedDogs));

module.exports = app;
