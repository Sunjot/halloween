const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Guest = new Schema({
  _id: Schema.Types.ObjectId,
  first: String,
  last: String,
  plusone: String,
  notes: String
}, {collection: "guests" });

module.exports = mongoose.model('Guest', Guest);
