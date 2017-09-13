var express = require('express');
var router = express.Router();
var Date = require('../models/date.js');

// Handles Ajax request for user information if user is authenticated
router.get('/', function (req, res) {
    console.log('get /calendar route');
    // check if logged in

    Date.find({}, function (err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            console.log('found data: ', data);
            res.send(data);
        }
    });
});
    // if (req.isAuthenticated()) {
    //     // send back date object from database
    //     console.log('logged in', req.user);
    //     var dateInfo = {
    //         date: req.user.date
    //     };
    //     res.send(dateInfo);
    // } else {
    //     // failure best handled on the server. do redirect here.
    //     console.log('not logged in');
    //     // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    //     res.send(false);
    // }
// });





module.exports = router;