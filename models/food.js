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

  static create(name, calories) {
    return database('foods').insert({ name: name, calories: calories, created_at: '10-01-01', updated_at: '10-01-01' }, 'id');
  }

  static destroy(id) {
    return database('foods').where({ id: id }).del();
  }

  static update(id, name, calories) {
    return database('foods')
            .where({ id: id })
            .update({ name: name, calories: calories}, 'id');
  }
}

module.exports = Food;
