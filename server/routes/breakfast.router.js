var express = require('express');
var router = express.Router();
var Breakfast = require('../models/breakfast.js');

// Handles Ajax request for user information if user is authenticated
router.get('/', function (req, res) {
    console.log('get /breakfast route');
    // check if logged in

    Breakfast.find({}, function (err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            console.log('found data: ', data);
            res.send(data);
        }
    });
});

router.post('/', function (req, res) {
    console.log('new breakfast food to store: ', req.body.breakfastInput);

    // use model/constructor to make a Mongoose Object
    var breakfastToSaveToTheCollection = new Breakfast(req.body);

    // insert into our collection
    breakfastToSaveToTheCollection.save(function (err, data) {
        console.log('saved to the collection: ', data);
        if (err) {
            console.log('save error: ', err);

            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }

    });
});
router.put('/:id', function (req, res) {
    var breakfastfoodId = req.params.id;

    console.log('new food:', req.body.breakfastfood);
    Breakfast.findByIdAndUpdate(
        { _id: breakfastfoodId },
        { $set: { location: req.body.location } },
        function (err, data) {
            if (err) {
                console.log('update error: ', err);

                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    )
});

module.exports = router;