const { connect, connection } = require('mongoose');

connect('mongodb://localhost/NoSQLSocial', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
