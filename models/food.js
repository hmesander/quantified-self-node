const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

class Food {
  static all() {
    return database('foods').select('id', 'name', 'calories');
  }

  static find(id) {
    return database('foods').select('id', 'name', 'calories').where('id', id)
  }

  static create(foodName, foodCalories) {
    return database("foods").insert({ name: foodName, calories: foodCalories }, "id");
  }
}

module.exports = Food;
