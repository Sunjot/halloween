const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Guest = require('./guest');

const app = express();
app.use(bodyParser.json());

dotenv.config();

// Connection to mongoDB Atlas Cluster
var mongoURL = "mongodb+srv://sunjotsingh:" + process.env.MDBPASS + "@tvtracker-bykmv.mongodb.net/guests?retryWrites=true";
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true}).catch(function(err) {
  console.log("Error connecting to DB: " + err);
});

var db = mongoose.connection; // Connection established
db.once('open', () => {
  console.log("Connection established to MongoDB Cluster");
});

app.post('/api/rsvp', (req, res, next) => {
    
    const newGuest = new Guest({
        _id: new mongoose.Types.ObjectId(),
        first: req.body.first,
        last: req.body.last,
        plusone: req.body.plusone,
        notes: req.body.notes
    });
    
    newGuest.save();
    res.status(200).send();
});

app.post('/api/topsecret', (req, res, next) => {

    if (req.body.pass === process.env.LIST) {
        Guest.find({}, (err, guests) => {
            res.send(guests);
        });
    }
});

app.listen(3010, () => console.log(`Listening on 3010`));