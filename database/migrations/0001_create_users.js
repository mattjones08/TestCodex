exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('users', {
    id: 'id',
    email: { type: 'text', unique: true },
  });
};

exports.down = pgm => {
  pgm.dropTable('users');
};
