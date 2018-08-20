
exports.seed = function(knex, Promise) {
  return knex('foods').del()
  .then(function () {
    return knex('foods').insert([
      {name: 'Banana', calories: 60},
      {name: 'Oatmeal', calories: 120}
    ])
  })
  .catch(error => console.log(`Error seeding foods: ${error}`))
};
