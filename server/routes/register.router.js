var express = require('express');
var router = express.Router();
var Users = require('../models/user.js');
var path = require('path');


// Handles request for HTML file
router.get('/', function(req, res, next) {
  console.log('get /register route');
  res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
  console.log('post /register route');
  /*
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  recipes: {type: Array}
  */
    var userToSave = {
      username : req.body.username,
      password : req.body.password,
      days: [
        {
          "dayofweek": "Monday",
          "breakfast": [],
          "lunch": [],
          "dinner": []
        },
        {
          "dayofweek": "Tuesday",
          "breakfast": [],
          "lunch": [],
          "dinner": []
        },
        {
          "dayofweek": "Wednesday",
          "breakfast": [],
          "lunch": [],
          "dinner": []
        },
        {
          "dayofweek": "Thursday",
          "breakfast": [],
          "lunch": [],
          "dinner": []
        },
        {
          "dayofweek": "Friday",
          "breakfast": [],
          "lunch": [],
          "dinner": []
        },
        {
          "dayofweek": "Saturday",
          "breakfast": [],
          "lunch": [],
          "dinner": []
        },
        {
          "dayofweek": "Sunday",
          "breakfast": [],
          "lunch": [],
          "dinner": []
        }
      ]
    };


    Users.create(userToSave, function(err, post) {
      console.log('post /register -- User.create');
         if(err) {
           console.log('post /register -- User.create -- failure');
           res.sendStatus(500);
         } else {
           console.log('post /register -- User.create -- success');
           res.sendStatus(201);
         }
    });
});


module.exports = router;
