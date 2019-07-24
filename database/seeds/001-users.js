exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { username: 'tylippe', department: 'teamlead' },
        { username: 'devinw', department: 'teamlead' },
        { username: 'kylo', department: 'pet' },
        { username: 'padme', department: 'pet' }
      ]);
    });
};
