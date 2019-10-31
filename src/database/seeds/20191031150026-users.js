const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Geraldo Gomes',
          email: 'geraldo@gmail.com',
          password_hash: bcrypt.hashSync('12345678', 8),
          created_at: new Date(),
          provider: true,
          updated_at: new Date(),
        },
        {
          name: 'Renato Diniz',
          email: 'renato@gmail.com',
          password_hash: bcrypt.hashSync('12345678', 8),
          created_at: new Date(),
          provider: false,
          updated_at: new Date(),
        },
        {
          name: 'Ronaldo Carvalho',
          email: 'ronaldo@gmail.com',
          password_hash: bcrypt.hashSync('12345678', 8),
          created_at: new Date(),
          provider: true,
          updated_at: new Date(),
        },
        {
          name: 'Maria Clara Roman',
          email: 'mariaclara@gmail.com',
          password_hash: bcrypt.hashSync('12345678', 8),
          created_at: new Date(),
          provider: true,
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
