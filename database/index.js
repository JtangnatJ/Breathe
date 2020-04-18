var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/breathe');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var breakSchema = mongoose.Schema({
//   quantity: Number,
//   description: String
});

var Break = mongoose.model('Break', breakSchema);

// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

module.exports.selectAll = selectAll;