const faker = require('faker');
const breeds = require('./dogsBreeds');

faker.locale = 'pt_BR';

const totalDogs = 200;

const breedsArray = Object.keys(breeds);

const generateDogs = () => {
  const dogs = [];
  for (let i = 0; i <= totalDogs; i++) {
    const name = faker.name.firstName();
    const gender = faker.random.arrayElement(['female', 'male']);
    const breed = faker.random.arrayElement(breedsArray);
    const subBreed = faker.random.arrayElement(breeds[breed]);
    const age = faker.random.number({
      min: 1,
      max: 15,
    });
    const generatedDog = {
      id: i,
      name,
      gender,
      breed,
      subBreed,
      age,
    };
    dogs.push(generatedDog);
  }

  return dogs;
};

module.exports = generateDogs();
