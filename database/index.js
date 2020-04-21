var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/breathe', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var breakSchema = mongoose.Schema({
  // user: String
  _id: Number,
  sessions: Array
  //   quantity: Number,
  //   description: String
});

let Break = mongoose.model('Break', breakSchema);

const date = new Date();
const year = date.getFullYear();
const month = `0${date.getMonth() + 1}`;
const day = `0${date.getDate()}`;
const dateString = `${year}${month.slice(-2)}${day.slice(-2)}`;
const dateNum = parseInt(dateString);

const saveSession = (timeString, callback) => {
  let breath = new Break();
  Break.findByIdAndUpdate(dateNum, {$push: {sessions: timeString}}, {upsert: true}, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
  // breath._id = dateNum;
  // breath.sessions.push(timeString);
  // db.runCommand(
  //   {
  //     findAndModify: "breaks",
  //     query: {_id: dateNum},
  //     update: {$push: {sessions: timeString}},
  //     upsert: true
  //   },
  //   (err) => {
  //     if (err) {
  //       callback(err, null);
  //     } else {
  //       callback(null, 'saved');
  //     }
  //   }
  // )
}

const findSessions = (callback) => {

}

module.exports.saveSession = saveSession;
module.exports.findSessions = findSessions;