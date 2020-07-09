const mongoose = require('mongoose');

const SchemaConfirmed = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('userConfirmed', SchemaConfirmed);
