var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/emergency2');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET *Userlist* database page. */
// router.get('/userlist', function(req, res) {
//     var db = req.db;
//     var collection = db.get('usercollection');
//     collection.find({},{},function(e,docs){
//         res.render('userlist', {
//             "userlist" : docs
//         });
//     });
// });


//Lets load the mongoose module in our program
var mongoose = require('mongoose');

//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost/emergency2');

/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var User = mongoose.model('User', {name: String, roles: Array, age: Number});

/**
 * Lets Use our Models
 * */

//Lets create a new user
var user1 = new User({name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']});

//Some modifications in user object
user1.name = user1.name.toUpperCase();

//Lets try to print and see it. You will see _id is assigned.
console.log(user1);

//Lets save it
user1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

module.exports = router;
